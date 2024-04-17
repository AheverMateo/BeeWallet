import argon2 from "argon2";
import UsersModel from "../schema.js";
import { resSuccess, resFail } from "../../../config/utils/response.js";
import MailingService from "../../Mailing/service.js";
import { logger } from "../../../config/logger.js";
import generateResetToken from "../../../config/utils/generateResetToken.js";
import { createWalletWhenUserRegister } from "../../Wallets/services.js";
import UsersService from "../service.js";

export const getSession = (req, res) => {
   return resSuccess(res, 200, "", req.session);
};

export const createUser = async (req, res) => {
   const { firstName, lastName, email, password } = req.body;
   try {
      // Check if user is already logged in
      if (req.user) {
         return resFail(
            res,
            400,
            "You're already logged in, log out before trying to sign up"
         );
      }
      // Validate input fields
      if (!firstName || !lastName || !email || !password) {
         return resFail(res, 400, "All fields are required");
      }
      // Validate password length and complexity
      if (password.length < 8) {
         return resFail(res, 400, "Password must be at least 8 characters long");
      }
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
         return resFail(res, 400, "Password must contain at least one letter and one number");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         return resFail(res, 400, "Invalid email address");
      }
      // Check if email is already in use
      const findUser = await UsersModel.findOne({ email: email });
      if (findUser) {
         return resFail(res, 400, "Email already in use");
      }
      // Hash the password with Argon2
      const hashedPassword = await argon2.hash(password);
      // Create a new user
      const newUser = new UsersModel({
         fullName: firstName + " " + lastName,
         email: email,
         password: hashedPassword,
         walletId: {},
      });
      // Create a wallet for the user
      newUser.walletId = await createWalletWhenUserRegister(newUser._id);
      // Save the user
      await newUser.save();
      // Load session data
      req.session.user = {
         fullName: newUser.fullName,
         email: newUser.email,
         roles: newUser.roles,
         isVerified: newUser.isVerified,
      };
      // Send verification email
      // todo: await mailsServices.sendVerificationEmail(service.payload..email, service.payload..vfToken);
      // Respond with success and token
      return resSuccess(res, 201, "User created successfully", newUser);
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};

export const loginUser = async (req, res) => {
   const { email, password } = req.body;
   if (req.session?.user) {
      return resFail(res, 400, "You're already logged in");
   }
   try {
      const user = await UsersModel.findOne({ email: email });
      if (!user) {
         return resFail(res, 400, "User or Password do not match");
      }
      const isPasswordValid = await argon2.verify(user.password, password);
      if (!isPasswordValid) {
         return resFail(res, 400, "User or Password do not match");
      }
      req.session.user = {
         fullName: user.fullName,
         email: user.email,
         roles: user.roles,
         isVerified: user.isVerified,
      };
      return resSuccess(res, 200, "logged in successfully");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};

export const logout = (req, res) => {
   if (!req.session?.user) {
      return resFail(res, 500, "You must be logged in to log out");
   }
   req.session.destroy((err) => {
      if (err) {
         return resFail(res, 500, "Failed to end session");
      }
      return resSuccess(res, 200, "Logged out");
   });
};
export const sendEmailVerification = async (req, res) => {
   const { email } = req.body;
   try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         return resFail(res, 400, "Invalid email address");
      }
      UsersService.initiateVerificationProcess(req, email);
      return resSuccess(res, 200, "E-Mail verification code sent");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};
export const verifyEmailCode = async (req, res) => {
   const { email, code } = req.body;
   try {
      const verification = UsersService.checkVerificationCodeInSession(req, providedCode);
      if (!verification) {
         return resFail(res, 400, "Invalid verification code");
      }
      return resSuccess(res, 200, "User verified successfully");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
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
      // Generate and save a password reset token
      const resetToken = await generateResetToken();
      const resetTokenExpire = new Date(Date.now() + 3600000); // Token expires in 1 hour
      user.pwResetToken = resetToken;
      user.pwResetTokenExpire = resetTokenExpire;
      await user.save();
      MailingService.sendPasswordResetEmail(user.email, resetToken);
      req.session.destroy();
      return resSuccess(res, 200, "Password reset token sent if email is registered");
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
      req.session.destroy();
      return resSuccess(res, 200, "Reset token verified successfully");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};

export const resetPassword = async (req, res) => {
   const { email, resetToken, newPassword } = req.body;
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
      req.session.destroy();
      return resSuccess(res, 200, "Password reset successfully");
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Internal Server Error");
   }
};
