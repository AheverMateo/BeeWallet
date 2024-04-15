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

export default router;
