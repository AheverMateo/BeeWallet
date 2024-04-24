import express from "express";
import {
  newCredit,
  updateCredit,
  getCredit,
  getAllUserCredits,
  getUserDebt,
  deleteCredit,
} from "./controller.js";
import { isAdmin, isLoggedIn } from "../../middlewares/auth.js";

const router = express.Router();

router.post("/", isLoggedIn, newCredit);
router.put("/update", isLoggedIn, updateCredit);
router.get("/:id", isLoggedIn, getCredit);
router.get("/debt/:id", isLoggedIn, getUserDebt);
router.get("/user/:id", isLoggedIn, getAllUserCredits);

// Just for admins
router.delete("/:id", isAdmin, deleteCredit);

export default router;
