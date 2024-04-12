import WalletModel from "./schema.js";
import { logger } from "../../config/logger.js";
import BigNumber from "bignumber.js";

export const createWalletWhenUserRegister = async (userId) => {
  try {
    const newWallet = new WalletModel({
      userId,
      balance: 0, // Initialize with zero balance
    });
    await newWallet.save();
    return newWallet;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
}

export const getWallet = async (walletId) => {
  try {
    const wallet = await WalletModel.findById(walletId);
    if (!wallet) {
      return null;
    }
    return wallet;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
}

export const getWalletBalance = async (walletId) => {
  try {
    const wallet = await WalletModel.findById(walletId);
    if (!wallet) {
      return null;
    }
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
}

export const addWalletBalance = async (walletId, amount) => {
  try {
    const wallet = await WalletModel.findById(walletId);
    if (!wallet) {
      return null;
    }
    // Use BigNumber for addition
    wallet.balance = new BigNumber(wallet.balance).plus(amount).toString();
    await wallet.save();
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
}

export const removeWalletBalance = async (walletId, amount) => {
  try {
    const wallet = await WalletModel.findById(walletId);
    if (!wallet) {
      return null;
    }
    // Use BigNumber for subtraction
    wallet.balance = new BigNumber(wallet.balance).minus(amount).toString();
    await wallet.save();
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
}

export const findWallet = async (UserId) => {
  try {
     const wallet = WalletModel.findOne({ userId: UserId });
     if (!wallet) {
        logger.error(`${error.stack}`);
        return new Error("Wallet not found");
     }
     return wallet;
  } catch {
    logger.error(`${error.stack}`);
     return new Error(`Error fetching wallet ID by user ID: ${error.message}`);
  }
};