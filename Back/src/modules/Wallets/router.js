import express from "express";
import {
  getWallet,
  getAllWallets,
  addWalletBalance,
  getWalletBalance,
  removeWalletBalance,
  getWalletTransactions,
} from "./controller.js";
import { isAdmin, isLoggedIn } from "../../middlewares/auth.js";

const router = express.Router();

router.get("/", isAdmin, getAllWallets);
router.get("/me", isLoggedIn, getWallet);
router.put("/add-balance/", isLoggedIn, addWalletBalance);
router.get("/balance/", isLoggedIn, getWalletBalance);
router.put("/remove-balance/", isLoggedIn, removeWalletBalance);
router.get("/transactions/:page", isLoggedIn, getWalletTransactions);

export default router;
