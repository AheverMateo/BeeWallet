import WalletModel from "./schema.js";
import { logger } from "../../config/logger.js";
import BigNumber from "bignumber.js";

export const createWalletWhenUserRegister = async (userId) => {
  try {
    const cvu = await WalletModel.createUniqueCVU(); // Generate a unique CVU
    const newWallet = new WalletModel({
      userId: userId,
      cvu: cvu, // Assign the generated unique CVU
      balance: 0, // Initialize with zero balance
    });
    await newWallet.save();
    return newWallet._id;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const getWallet = async (userId) => {
  try {
    const wallet = await WalletModel.findOne({ userId: userId });
    if (!wallet) {
      return null;
    }
    return wallet;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const getWalletBalance = async (userId) => {
  try {
    const wallet = await WalletModel.findOne({ userId: userId });
    if (!wallet) {
      return null;
    }
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const addWalletBalance = async (userId, amount) => {
  try {
    const wallet = await WalletModel.findOne({ userId: userId });
    if (!wallet) {
      return null;
    }
    // Use BigNumber for addition
    const newBalance = new BigNumber(wallet.balance.toString()).plus(amount);
    wallet.balance = newBalance.toString();
    await wallet.save();
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const removeWalletBalance = async (userId, amount) => {
  try {
    const wallet = await WalletModel.findOne({ userId: userId });
    if (!wallet) {
      return null;
    }
    // Use BigNumber for subtraction
    const newBalance = new BigNumber(wallet.balance.toString()).minus(amount);
    wallet.balance = newBalance.toString();
    await wallet.save();
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};
