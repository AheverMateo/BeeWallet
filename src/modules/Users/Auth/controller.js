import jwt from "jsonwebtoken";
import argon2 from "argon2";
import UsersModel from "../schema.js";
import { resSuccess, resFail } from "../../../config/utils/response.js";
import MailingService from "../../Mailing/service.js";
import { logger } from "../../../config/logger.js";
import generateResetToken from "../../../config/utils/generateResetToken.js";

export const createUser = async (req, res) => {
   const { firstName, lastName, email, password } = req.body;
   try {
      // Check if user is already logged in
      if (req.user) {
         return res.status(400).json({
            success: false,
            message: "You're already logged in, log out before trying to sign up",
         });
      }
      // Validate input fields
      if (!firstName || !lastName || !email || !password) {
         return res.status(400).json({ success: false, message: "All fields are required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Validate password length and complexity
      if (password.length < 8) {
         return res
            .status(400)
            .json({ success: false, message: "Password must be at least 8 characters long" });
      }
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
         return res.status(400).json({
            success: false,
            message: "Password must contain at least one letter and one number",
         });
      }
      if (!emailRegex.test(email)) {
         return res.status(400).json({ success: false, message: "Invalid email address" });
      }
      // Check if email is already in use
      const findUser = await UsersModel.findOne({ email: email });
      if (findUser) {
         return res.status(400).json({ success: false, message: "Email already in use" });
      }
      // Hash the password with Argon2
      const hashedPassword = await argon2.hash(password);
      // Create a new user
      const newUser = new UsersModel({
         firstName: firstName,
         lastName: lastName,
         email: email,
         password: hashedPassword,
      });
      await newUser.save();
      // Generate JWT token
      const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
         expiresIn: "1h",
      });
      // Respond with success and token
      return res
         .status(201)
         .json({ success: true, message: "User created successfully", token });
   } catch (error) {
      logger.error(`${error.stack}`);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
   }
};

export const loginUser = async (req, res) => {
   const { email, password } = req.body;
   try {
      // Find the user in the database
      const user = await UsersModel.findOne({ email: email });
      // Check if the user exists
      if (!user) {
         resFail(res, 400, "User or password do not match");
      }
      // Verify the password using Argon2
      const isPasswordValid = await argon2.verify(user.password, password);
      if (!isPasswordValid) {
         return res
            .status(400)
            .json({ success: false, message: "User or password do not match" });
      }
      // Generate JWT token
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
         expiresIn: "1h",
      });
      // Respond with success and token
      return res.status(200).json({ success: true, message: "Logged in", token });
   } catch (error) {
      logger.error(`${error.stack}`);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
   }
};

export const requestPasswordReset = async (req, res) => {
   const { email } = req.body;
   try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         return resFail(res, 400, "Invalid email address");
      }
      const user = await UsersModel.findOne({ email: email });
      if (!user) {
         return resSuccess(res, 200, "Password reset token sent if email is registered");
      }

      // todo:
      // Destroy session/token / regenerate token

      // Generate and save a password reset token
      const resetToken = await generateResetToken();
      const resetTokenExpire = new Date(Date.now() + 3600000); // Token expires in 1 hour
      user.pwResetToken = resetToken;
      user.pwResetTokenExpire = resetTokenExpire;
      await user.save();
      MailingService.sendPasswordResetEmail(user.email, resetToken);
      return resSuccess(res, 200, "Password reset token sent if email is registered");
      // return res.status(200).json({ success: true, message: "Password reset token sent if email is registered"});
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};

export const verifyPasswordResetToken = async (req, res) => {
   const { email, resetToken } = req.params;
   try {
      const user = await UsersModel.findOne({
         email: email,
         pwResetToken: resetToken,
      });
      if (!user || user.pwResetTokenExpire < new Date()) {
         return resFail(res, 400, "Invalid or expired reset token");
      }
      return resSuccess(res, 200, "Reset token verified successfully");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};

export const resetPassword = async (req, res) => {
   const { email, resetToken, newPassword } = req.body;

   // todo:
   // Destroy session/token / regenerate token

   try {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(newPassword)) {
         return resFail(res, 400, "Password must contain at least one letter and one number");
      }
      const user = await UsersModel.findOne({
         email: email,
         pwResetToken: resetToken,
         pwResetTokenExpire: { $gt: new Date() },
      });
      if (!user || user.pwResetTokenExpire < new Date()) {
         return resFail(res, 400, "Invalid or expired reset token");
      }
      // Update the password
      user.password = await argon2.hash(newPassword);
      user.pwResetToken = null;
      user.pwResetTokenExpire = null;
      await user.save();
      return resSuccess(res, 200, "Password reset successfully");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};
