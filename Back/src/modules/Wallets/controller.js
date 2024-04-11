import WalletModel from "./schema.js";
import { 
  transferBetweenAccounts,
  transferTypeUpdate,
  transferById,
  transferByUserId,
  allTransfers,
  deleteTransfer
} from "../Transactions/controller.js";
import { resSuccess, resFail } from "../../config/utils/response.js";
import { logger } from "../../config/logger.js";
import BigNumber from "bignumber.js";

export const createWallet = async (req, res) => {
  const { userId } = req.body;
  try {
    const newWallet = new WalletModel({
      userId,
      balance: 0, // Initialize with zero balance
    });
    await newWallet.save();
    resSuccess(res, 201, "Wallet created successfully", newWallet);
  } catch (error) {
    logger.error(`${error.stack}`)
    res.status(500).send('Server Error');
  }
}

export const getWallet = async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    resSuccess(res, 200, "Wallet found", wallet);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const updateWallet = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    wallet.userId = userId;
    await wallet.save();
    resSuccess(res, 200, "Wallet updated successfully", wallet);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const deleteWallet = async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    await wallet.remove();
    resSuccess(res, 200, "Wallet deleted successfully");
  }
  catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const getAllWallets = async (req, res) => {
  try {
    const wallets = await WalletModel.find();
    resSuccess(res, 200, "Wallets found", wallets);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const addWalletBalance = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    // Use BigNumber for addition
    wallet.balance = new BigNumber(wallet.balance).plus(amount).toString();
    await wallet.save();
    resSuccess(res, 200, "Wallet balance updated successfully", wallet.balance);
  } catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const removeWalletBalance = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    // Use BigNumber for subtraction
    wallet.balance = new BigNumber(wallet.balance).minus(amount).toString();
    await wallet.save();
    resSuccess(res, 200, "Wallet balance updated successfully", wallet.balance);
  } catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const getWalletBalance = async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    resSuccess(res, 200, "Wallet found", wallet.balance);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const getWalletTransactions = async (req, res) => {
  // I suppose that the user can only see his own transactions
  const { id } = req.params;
  try {
    const wallet = await WalletModel.findById(id);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    const transactions = await TransactionController.getTransactionsByWalletId(id);
    resSuccess(res, 200, "Wallet transactions found", transactions);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const createWalletTransaction = async (req, res) => {
  // Waiting Transaction Controller
}

export const updateWalletTransaction = async (req, res) => {
  // Waiting Transaction Controller
}

export const deleteWalletTransaction = async (req, res) => {
  // Waiting Transaction Controller
}

export const getWalletTransactionById = async (req, res) => {
  // Waiting Transaction Controller
}