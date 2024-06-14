import WalletModel from "./schema.js";
import { logger } from "../../config/logger.js";
import BigNumber from "bignumber.js";
import {
  validateBigNumber,
  validateBigNumberZero,
  validateBigNumberNegative,
} from "../../config/utils/bigNumberValidations.js";

export const createWalletWhenUserRegister = async (userId) => {
  try {
    const cvu = await WalletModel.createUniqueCVU(); // Generate a unique CVU
    const newWallet = new WalletModel({
      userId,
      cvu, // Assign the generated unique CVU
      balance: 0, // Initialize with zero balance
    });
    await newWallet.save();
    return newWallet._id;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const getAllUsersWallets = async () => {
  try {
    const wallets = await WalletModel.find();
    if (!wallets) {
      return null;
    }
    return wallets;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const getUserWallet = async (userId) => {
  try {
    const wallet = await WalletModel.findOne({ userId });
    if (!wallet) {
      return null;
    }
    return wallet;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const getUserWalletBalance = async (userId) => {
  try {
    const wallet = await WalletModel.findOne({ userId });
    if (!wallet) {
      return null;
    }
    return wallet.balance;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const addUserWalletBalance = async (userId, amount) => {
  try {
    const wallet = await WalletModel.findOne({ userId });
    if (!wallet) {
      return null;
    }
    // BigNumber validations
    if (!validateBigNumber(amount)) {
      throw new Error("Amount must be a type Number", {
        sucsess: false,
        statusCode: 400,
      });
    }
    if (validateBigNumberZero(amount)) {
      throw new Error("Amount must be greater than zero", {
        sucsess: false,
        statusCode: 400,
      });
    }
    if (validateBigNumberNegative(amount)) {
      throw new Error("Amount must be a positive number", {
        sucsess: false,
        statusCode: 400,
      });
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

export const removeUserWalletBalance = async (userId, amount) => {
  try {
    const wallet = await WalletModel.findOne({ userId });
    if (!wallet) {
      return null;
    }
    // BigNumber validations
    if (!validateBigNumber(amount)) {
      throw new Error("Amount must be a type Number", {
        sucsess: false,
        statusCode: 400,
      });
    }
    if (validateBigNumberZero(amount)) {
      throw new Error("Amount must be greater than zero", {
        sucsess: false,
        statusCode: 400,
      });
    }
    if (validateBigNumberNegative(amount)) {
      throw new Error("Amount must be a positive number", {
        sucsess: false,
        statusCode: 400,
      });
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
