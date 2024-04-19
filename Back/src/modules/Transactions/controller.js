import mongoose from "mongoose";
import TransactionModel from "./schema.js";
import WalletModel from "../Wallets/schema.js";
import { logger } from "../../config/logger.js";
import {
  resSuccess,
  resFail
} from "../../config/utils/response.js";
import {
  addUserWalletBalance,
  removeUserWalletBalance,
  getUserWallet
} from "../Wallets/services.js";

// pasar validada
export const transferBetweenAccounts = async (req, res) => {
  const { type, amount, currency, fromUserId, toUserId } = req.body;
  // Revisar JWT y consultar sesión
  try {
    const fromWalletId = await getUserWallet(fromUserId);
    const toWalletId = await getUserWallet(toUserId);
    const fromBalance = await removeUserWalletBalance(fromWalletId, amount);
    if (fromBalance < 0) {
      // throw new Error("Insufficient funds for transfer");
      return resFail(res, 400, "Insufficient funds for transfer");
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    const newTransfer = new TransactionModel({
      type,
      amount,
      currency,
      fromWalletId,
      toWalletId,
      status: "pending"
    });
    await addUserWalletBalance(toWalletId, amount);
    const savedTransfer = await newTransfer.save({ session });
    await session.commitTransaction();
    session.endSession();
    // res.status(200).json({ message: 'Transfer completed successfully', transfer: savedTransfer });
    resSuccess(res, 200, "Transfer completed successfully", savedTransfer);
  } catch (error) {
    // await session.abortTransaction();
    // session.endSession();
    // res.status(500).json({ message: 'Error while transferring', error: error.message });
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error while transferring");
  }
};// check

export const transferTypeUpdate = async (req, res) => {
  const { type, transactionId } = req.body;
  try {
    const transferUpdate = await TransactionModel.findByIdAndUpdate(
      transactionId,
      { $set: { type } },
      { new: true }
    );
      // res.status(200).json({transferUpdate});
    resSuccess(res, 200, "Successful update", transferUpdate);
  } catch (error) {
    // res.status(500).json({ message: 'Error updating transfer' });
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error updating transfer");
  }
};// check

export const transferById = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const transfer = await TransactionModel.findById(transactionId).where("deleted").equals(false);
    if (!transfer) {
      return resFail(res, 404, "Transaction not found");
    }
    resSuccess(res, 200, "Transfer details retrieved successfully", transfer);
  } catch (error) {
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error updating transfer");
  }
};// check

export const transferByUserId = async (req, res) => {
  const { userId, page } = req.params;
  const walletId = await getUserWallet(userId);
  try {
    if (!walletId) {
      return resFail(res, 404, "Wallet not found for user");
    }
    const transactions = await TransactionModel.find({
      $or: [{ fromWalletId: walletId }, { toWalletId: walletId }],
      deleted: false
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 25)
      .limit(25);

    if (!transactions || transactions.length === 0) {
      return resSuccess(res, 404, "No transactions found", []);
    }
    resSuccess(res, 200, "Transactions retrieved successfully", transactions);
  } catch (error) {
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error retrieving transactions");
  }
};// check

export const allTransfers = async (req, res) => {
  try {
    const { page } = req.params;
    const transactions = await TransactionModel.find({
      deleted: false
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 25)
      .limit(25);

    if (!transactions || transactions.length === 0) {
      return resSuccess(res, 404, "No transactions found", []);
    }
    resSuccess(res, 200, "Transactions retrieved successfully", transactions);
  } catch (error) {
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error retrieving transactions");
  }
};// check

export const deleteTransfer = async (req, res) => {
  const { transactionId } = req.body;
  try {
    const transaction = await TransactionModel.findById(transactionId);
    if (!transaction) {
      return resFail(res, 404, "Transaction not found");
    }
    const { fromWalletId, toWalletId } = transaction;
    const fromWallet = await WalletModel.findById(fromWalletId);
    const toWallet = await WalletModel.findById(toWalletId);

    if (fromWallet || toWallet) {
      return resFail(res, 404, "One or both wallets are active");
    }
    transaction.deleted = true;
    await transaction.save();
    resSuccess(res, 200, "Transaction deleted successfully", transaction);
  } catch (error) {
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error deleting transaction");
  }
};// check
