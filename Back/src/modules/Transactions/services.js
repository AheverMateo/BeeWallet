import mongoose from "mongoose";
import TransactionModel from "./schema.js";
import WalletModel from "../Wallets/schema.js";
import { resSuccess, resFail } from "../../config/utils/response.js";
import { addUserWalletBalance, removeUserWalletBalance, getUserWallet } from "../Wallets/services.js";


export const NewTransfer = async (type, amount, currency, fromUserId, toUserId )=>{
    try {
        const fromWalletId = await getUserWallet(fromUserId);
        const toWalletId = await getUserWallet(toUserId);
        const fromBalance = await removeUserWalletBalance(fromWalletId, amount);

        if (fromBalance < 0) {
            throw new Error("Insufficient funds for transfer");
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
        await addUserWalletBalance(toWalletId,amount);
        const savedTransfer = await newTransfer.save({session});
        await session.commitTransaction();
        session.endSession();
        return savedTransfer;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
}

export const transferUpdate = async (type, transactionId)=>{
    try {
        const transferUpdate = await TransactionModel.findByIdAndUpdate(
            transactionId,
            { $set: { type: type } },
            { new: true }
        );
        return transferUpdate;
    } catch (error) {
        throw error;
    }
}
export const transferByUserId = async (userId, page) => {
    try {
        const walletId =await getUserWallet(userId);
        if (!walletId) {
            return "Wallet not found for user";
         }
         const transactions = await TransactionModel.find({
            $or: [{ fromWalletId: walletId }, { toWalletId: walletId }],
            deleted: false
         })
            .sort({ createdAt: -1 })
            .skip((page - 1) * 25)
            .limit(25);
   
         if (!transactions || transactions.length === 0) {
            return "No transactions found";
         }
         return transactions;
    } catch (error) {
        throw error;
    }
}