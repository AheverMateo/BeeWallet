import mongoose from "mongoose";
import TransactionModel from "./schema.js";
import WalletModel from "../Wallets/schema.js";
import { logger } from "../../config/logger.js";
import { resSuccess, resFail } from "../../config/utils/response.js";

// pasar validada

const updateWalletBalance = async (walletId, amount, isAdd) => {
   try {
      const wallet = await WalletModel.findById(walletId);
      if (!wallet) {
         return new Error("Wallet not found");
      }

      if (!isAdd && amount > wallet.balance) {
         return new Error("Insufficient balance for withdrawal");
      }

      if (isAdd) {
         wallet.balance += amount;
      } else {
         wallet.balance -= amount;
      }

      await wallet.save();
      return wallet.balance;
   } catch (error) {
      return new Error(`Error updating wallet balance: ${error.message}`);
   }
};
const findWallet = async (UserId) => {
   try {
      const wallet = WalletModel.findOne({ userId: UserId });
      if (!wallet) {
         return new Error("Wallet not found");
      }
      return wallet;
   } catch {
      return new Error(`Error fetching wallet ID by user ID: ${error.message}`);
   }
};
export const transferBetweenAccounts = async (req, res) => {
   const { type, amount, currency, fromUserId, toUserId } = req.body;
   // Revisar JWT y consultar sesión
   try {
      const fromWalletId = await findWallet(fromUserId);
      const toWalletId = await findWallet(toUserId);
      const fromBalance = await updateWalletBalance(fromWalletId, amount, false);
      if (fromBalance < 0) {
         //throw new Error("Insufficient funds for transfer");
         return resFail(res, 400, "Insufficient funds for transfer");
      }

      const session = await mongoose.startSession();
      session.startTransaction();

      const newTransfer = new TransactionModel({
         type: type,
         amount: amount,
         currency: currency,
         fromWalletId: fromWalletId,
         toWalletId: toWalletId,
         status: "pending",
      });
      await updateWalletBalance(toWalletId, amount, true);
      const savedTransfer = await newTransfer.save({session});
      await session.commitTransaction();
      session.endSession();
      //res.status(200).json({ message: 'Transfer completed successfully', transfer: savedTransfer });
      resSuccess(res, 200, "Transfer completed successfully", savedTransfer);
   } catch (error) {
      //await session.abortTransaction();
      //session.endSession();
      //res.status(500).json({ message: 'Error while transferring', error: error.message });
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Error while transferring");
   }
};//check
export const transferTypeUpdate = async (req, res) => {
   const { type, transactionId } = req.body;
   try {
      const transferUpdate = await TransactionModel.findByIdAndUpdate(
         transactionId,
         { $set: { type: type } },
         { new: true }
      );
      //res.status(200).json({transferUpdate});
      resSuccess(res, 200, "Successful update", transferUpdate);
   } catch (error) {
      //res.status(500).json({ message: 'Error updating transfer' });
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Error updating transfer");
   }
};//check
export const transferById = async (req, res) => {
   const { transactionId } = req.params;
   try {
      const transfer = await TransactionModel.findById(transactionId).where('deleted').equals(false);
      if (!transfer) {
         return resFail(res, 404, "Transaction not found");
      }
      resSuccess(res, 200, "Transfer details retrieved successfully", transfer);
   } catch (error) {
      logger.error(`${error.stack}`);
      return resFail(res, 500, "Error updating transfer");
   }
};//check
export const transferByUserId = async (req, res) => {
   const { UserId, page } = req.params;
   const walletId =await findWallet(UserId);
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
};//check
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
};//check
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
};//check
