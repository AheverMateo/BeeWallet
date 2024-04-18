import { resSuccess, resFail } from "../../config/utils/response.js";
import { logger } from "../../config/logger.js";
import { 
  getUserWallet, 
  getAllUsersWallets, 
  addUserWalletBalance, 
  removeUserWalletBalance, 
  getUserWalletBalance 
} from "./services.js";

export const getWallet = async (req, res) => {
  try {
    const userId = req.user._id;
    const wallet = await getUserWallet(userId);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    resSuccess(res, 200, "Wallet found", wallet);
  }
  catch (error) {
    logger.error(`${error.stack}`);
    resFail(res, 500, "Internal Server Error");
  }
};

export const getAllWallets = async (req, res) => {
  try {
    const wallets = await getAllUsersWallets();
    if (!wallets) {
      return resFail(res, 404, "Wallets not found");
    }
    resSuccess(res, 200, "Wallets found", wallets);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    resFail(res, 500, "Internal Server Error");
  }
};

export const addWalletBalance = async (req, res) => {
  const userId = req.user._id;
  const { amount } = req.body;
  try {
    const wallet = await addUserWalletBalance(userId, amount);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    resSuccess(res, 200, "Wallet balance updated successfully", wallet.balance);
  } catch (error) {
    logger.error(`${error.stack}`)
    resFail(res, 500, "Internal Server Error");
  }
};

export const removeWalletBalance = async (req, res) => {
  const userId = req.user._id;
  const { amount } = req.body;
  try {
    const wallet = await removeUserWalletBalance(userId, amount);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    resSuccess(res, 200, "Wallet balance updated successfully", wallet.balance);
  } catch (error) {
    logger.error(`${error.stack}`)
    resFail(res, 500, "Internal Server Error");
  }
};

export const getWalletBalance = async (req, res) => {
  const userId = req.user._id;
  try {
    const wallet = await getUserWalletBalance(userId);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    resSuccess(res, 200, "Wallet found", wallet.balance);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    resFail(res, 500, "Internal Server Error");
  }
};

export const getWalletTransactions = async (req, res) => {
  // I suppose that the user can only see his own transactions
  const userId = req.user._id;
  try {
    const wallet = await getUserWallet(userId);
    if (!wallet) {
      return resFail(res, 404, "Wallet not found");
    }
    const transactions = await TransactionController.getTransactionsByWalletId(id);
    resSuccess(res, 200, "Wallet transactions found", transactions);
  }
  catch (error) {
    logger.error(`${error.stack}`)
    resFail(res, 500, "Internal Server Error");
  }
};
