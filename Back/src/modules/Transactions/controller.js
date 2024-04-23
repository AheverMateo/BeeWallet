import TransactionModel from "./schema.js";
import WalletModel from "../Wallets/schema.js";
import { logger } from "../../config/logger.js";
import { resSuccess, resFail } from "../../config/utils/response.js";
import { NewTransfer, transferUpdate, transferByUserIdService } from "./services.js";

// pasar validada
export const transferBetweenAccounts = async (req, res) => {
  const { type, amount, currency, fromUserId, toUserId } = req.body;
  // Revisar JWT y consultar sesión
  try {
    const savedTransfer = await NewTransfer(type, amount, currency, fromUserId, toUserId);
    resSuccess(res, 200, "Transfer completed successfully", savedTransfer);
  } catch (error) {
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Error while transferring");
  }
};// check

export const transferTypeUpdate = async (req, res) => {
  const { type, transactionId } = req.body;
  try {
    const transferupdate = transferUpdate(type, transactionId);
    resSuccess(res, 200, "Successful update", transferupdate);
  } catch (error) {
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
  try {
    const transactions = await transferByUserIdService(userId, page);
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
      deleted: false,
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
