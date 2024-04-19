import express from "express";
import {
  getWallet,
  getAllWallets,
  addWalletBalance,
  getWalletBalance,
  removeWalletBalance,
  getWalletTransactions
} from "./controller.js";
import { isAdmin, isLoggedIn } from "../../middlewares/auth.js";

const router = express.Router();

router.get("/", isAdmin, getAllWallets);
router.get("/:id", isLoggedIn, getWallet);
router.put("/add-balance/:id", isLoggedIn, addWalletBalance);
router.get("/balance/:id", isLoggedIn, getWalletBalance);
router.put("/remove-balance/:id", isLoggedIn, removeWalletBalance);
router.get("/transactions/:id", isLoggedIn, getWalletTransactions);

export default router;
