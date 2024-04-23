import express from "express";
import {
  getSession,
  createUser,
  loginUser,
  logout,
  requestPasswordReset,
  verifyPasswordResetToken,
  resetPassword,
  sendEmailVerification,
  verifyEmailCode
} from "./controller.js";
import { bodyCleaner } from "../../../middlewares/bodyCleaner.js";

const router = express.Router();

router.get("/session", getSession); // isAdmin,
router.post("/sendEmailVerification", sendEmailVerification);
router.post("/verifyEmailCode", verifyEmailCode);
router.post("/register", createUser);
router.post("/login", bodyCleaner("email", "password"), loginUser);
router.post("/logout", logout);
router.post("/reset-password/request", requestPasswordReset);
router.get("/reset-password/verify/:email/:resetToken", verifyPasswordResetToken);
router.post("/reset-password/reset", resetPassword);

export default router;
