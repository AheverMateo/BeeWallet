import express from "express";
import {
   createUser,
   loginUser,
   requestPasswordReset,
   verifyPasswordResetToken,
   resetPassword,
} from "./controller.js";
import { bodyCleaner } from "../../../middlewares/bodyCleaner.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", bodyCleaner("email", "password"), loginUser);
router.post("/reset-password/request", requestPasswordReset);
router.get("/reset-password/verify/:email/:resetToken", verifyPasswordResetToken);
router.post("/reset-password/reset", resetPassword);

export default router;
