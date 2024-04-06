import express from "express";
import { 
  createWallet, 
  getWallet, 
  updateWallet, 
  deleteWallet, 
  getAllWallets, 
  addWalletBalance, 
  getWalletBalance, 
  removeWalletBalance, 
  getWalletTransactions, 
  createWalletTransaction, 
  updateWalletTransaction, 
  deleteWalletTransaction, 
  getWalletTransactionById 
} from "./controller.js";

const router = express.Router();

router.post("/", createWallet);
router.get("/:id", getWallet);
router.put("/:id", updateWallet);
router.delete("/:id", deleteWallet);
router.get("/", getAllWallets);
router.put("/add-balance/:id", addWalletBalance);
router.get("/balance/:id", getWalletBalance);
router.put("/remove-balance/:id", removeWalletBalance);
router.get("/transactions/:id", getWalletTransactions);
router.post("/transactions/:id", createWalletTransaction);
router.put("/transactions/:id", updateWalletTransaction);
router.delete("/transactions/:id", deleteWalletTransaction);
router.get("/transactions/:id/:transactionId", getWalletTransactionById);

export default router;