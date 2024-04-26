import mongoose from "mongoose";
import TransactionModel from "./schema.js";
import {
  addUserWalletBalance,
  removeUserWalletBalance,
  getUserWallet,
} from "../Wallets/services.js";
import { logger } from "../../config/logger.js";

export const NewTransfer = async (type, amount, currency, fromUserId, toUserId) => {
  let session;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const fromWalletId = await getUserWallet(fromUserId);
    const toWalletId = await getUserWallet(toUserId);
    const fromBalance = toWalletId.balance;

    if (fromBalance < 0) {
      throw new Error("Insufficient funds for transfer");
    }

    const newTransfer = new TransactionModel({
      type,
      amount,
      currency,
      fromWalletId,
      toWalletId,
      status: "Success",
    });

    await removeUserWalletBalance(fromWalletId.userId, amount);
    await addUserWalletBalance(toWalletId.userId, amount);
    const savedTransfer = await newTransfer.save({ session });
    await session.commitTransaction();

    return savedTransfer;
  } catch (error) {
    if (session) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

export const transferUpdate = async (type, transactionId) => {
  try {
    const transferUpdate = await TransactionModel.findByIdAndUpdate(
      transactionId,
      { $set: { type } },
      { new: true },
    );
    return transferUpdate;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};
export const transferByUserIdService = async (userId, page) => {
  try {
    const walletId = await getUserWallet(userId);
    if (!walletId) {
      return "Wallet not found for user";
    }
    const transactions = await TransactionModel.find({
      $or: [{ fromWalletId: walletId }, { toWalletId: walletId }],
      deleted: false,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 25)
      .limit(25);

    if (!transactions || transactions.length === 0) {
      return "No transactions found";
    }
    return transactions;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const expenseHistoryService = async (userId) => {
  try {
    const walletId = await getUserWallet(userId);
    if (!walletId) {
      return "Wallet not found for user";
    }
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const transactions = await TransactionModel.aggregate([
      {
        $match: {
          $or: [{ fromWalletId: walletId }],
          deleted: false,
          createdAt: { $gte: startOfMonth },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
    ]);

    if (!transactions || transactions.length === 0) {
      return "No transactions found";
    }
    return transactions[0];
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const incomeHistoryService = async (userId) => {
  try {
    const walletId = await getUserWallet(userId);
    if (!walletId) {
      return "Wallet not found for user";
    }
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const transactions = await TransactionModel.aggregate([
      {
        $match: {
          $or: [{ toWalletId: walletId }],
          deleted: false,
          createdAt: { $gte: startOfMonth },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
    ]);

    if (!transactions || transactions.length === 0) {
      return "No transactions found";
    }
    return transactions[0];
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};
