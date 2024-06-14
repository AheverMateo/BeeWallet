import MailingService from "../Mailing/service.js";
import UsersModel from "./schema.js";
import { logger } from "../../config/logger.js";
import mongoose from "mongoose";

class UsersService {
  static generateVerificationCode () {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
  }

  static storeVerificationCodeInSession (req, code) {
    req.session.verificationCode = code;
    req.session.codeExpiry = Date.now() + 600000; // Code valid for 10 minutes
  }

  static checkVerificationCodeInSession (req, providedCode) {
    if (req.session.verificationCode === providedCode && req.session.codeExpiry > Date.now()) {
      return true; // Code is correct and not expired
    }
    return false; // Code is incorrect or expired
  }

  static async initiateVerificationProcess (req, email) {
    const code = UsersService.generateVerificationCode();
    UsersService.storeVerificationCodeInSession(req, code);
    await MailingService.sendEmailCodeVerification(email, code);
  }

  static async getUsers () {
    try {
      const users = await UsersModel.find({});
      return [200, "Displaying all Users", { users }];
    } catch (error) {
      logger.error(`${error.stack}`);
      return [500, "Internal Server Error"];
    }
  }

  static async getUser (id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return [400, "Invalid user ID"];
      }
      const user = await UsersModel.findOne({ _id: id }).populate({
        path: "wishlist.product",
        model: "products",
      });
      if (!user) {
        return [400, "User Not Found"];
      }
      return [200, "Displaying User: " + id, { user }];
    } catch (error) {
      logger.error(`${error.stack}`);
      return [500, "Internal Server Error"];
    }
  }

  static async deleteUser (id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return [400, "Invalid user ID"];
      }
      const user = await UsersModel.findOne({ _id: id });
      if (!user) {
        return [400, "User Not Found"];
      }
      await UsersModel.deleteOne({ _id: id });
      return [200, "User " + id + " Deleted"];
    } catch (error) {
      logger.error(`${error.stack}`);
      return [500, "Internal Server Error"];
    }
  }

  static async updateUser (id, updatedProperties) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return [400, "Invalid user ID"];
      }
      const user = await UsersModel.findOne({ _id: id });
      if (!user) {
        return [400, "User Not Found"];
      }
      if ("password" in updatedProperties) {
        return [400, "Password cannot be updated"];
      }
      const propertiesToUpdate = Object.keys(updatedProperties).filter(
        (key) => key !== "_id" && key !== "password" && user[key] !== undefined,
      );
      propertiesToUpdate.forEach((key) => {
        user[key] = updatedProperties[key];
      });
      await user.save({ new: true });

      return [
        200,
        "User " + id + " Updated Successfully",
        {
          updatedUser: user,
        },
      ];
    } catch (error) {
      logger.error(`${error.stack}`);
      return [500, "Internal Server Error"];
    }
  }

  static async blockUser (id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return [400, "Invalid user ID"];
      }
      const user = await UsersModel.findOne({ _id: id });
      if (!user) {
        return [400, "User Not Found"];
      }
      await UsersModel.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
      return [200, "User " + id + " Blocked"];
    } catch (error) {
      logger.error(`${error.stack}`);
      return [500, "Internal Server Error"];
    }
  }

  static async unblockUser (id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return [400, "Invalid user ID"];
      }
      const user = await UsersModel.findOne({ _id: id });
      if (!user) {
        return [400, "User Not Found"];
      }
      await UsersModel.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
      return [200, "User " + id + " unBlocked"];
    } catch (error) {
      logger.error(`${error.stack}`);
      return [500, "Internal Server Error"];
    }
  }
}

export default UsersService;
