import mongoose from "mongoose";
import TransactionModel from './schema';
import WalletModel from '../Wallets/schema';
import { error } from "winston";
import { resSuccess, resFail } from "../../config/utils/response.js";

// Preguntar conexion con DB se hace aca o ya esta conectado? == desde app JS

// pasar validada 

const updateWalletBalance = async (walletId, amount, isAdd) => {
    try {
      const wallet = await WalletModel.findById(walletId);
      if (!wallet) {
        throw new Error("Wallet not found");
      }

      if (!isAdd && amount > wallet.balance) {
        throw new Error("Insufficient balance for withdrawal");
      }

      if (isAdd) {
        wallet.balance += amount;
      } else {
        wallet.balance -= amount;
      }
  
      await wallet.save();
      return wallet.balance;
    } catch (error) {
      throw new Error(`Error updating wallet balance: ${error.message}`);
    }
};
const findWallet =async(UserId)=>{
    try{
        const wallet = WalletModel.findOne(UserId);
        if (!wallet) {
            throw new Error("Wallet not found");
        }
        return wallet;
    }
    catch{
        throw new Error(`Error fetching wallet ID by user ID: ${error.message}`);
    }
}
export const transferBetweenAccounts = async (req, res) => {
    const { type, amount, currency, fromUserId, toUserId } = req.body;
    // Revisar JWT y consultar sesión
    try {
        const fromWalletId = findWallet(fromUserId);
        const toWalletId = findWallet(toUserId);
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
            status: 'pending',
        });
        await updateWalletBalance(toWalletId, amount, true);
        const savedTransfer = await newTransfer.save({ session });
        await session.commitTransaction();
        session.endSession();
        //res.status(200).json({ message: 'Transfer completed successfully', transfer: savedTransfer });
        resSuccess(res, 200, "Transfer completed successfully", savedTransfer)
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        //res.status(500).json({ message: 'Error while transferring', error: error.message });
        logger.error(`${error.stack}`)
        return resFail(res, 500, "Error while transferring");
    }
};
export const transferTypeUpdate = async (req, res) => {
    const {type, transactionId} =req.body;
    try {
        const transferUpdate = await TransactionModel.findByIdAndUpdate(
            transactionId,
            {$set: {type: type}},
            {new:true}
        );
        //res.status(200).json({transferUpdate});
        resSuccess(res, 200, "Successful update", transferUpdate)
    } catch (error) {
        //res.status(500).json({ message: 'Error updating transfer' });
        logger.error(`${error.stack}`)
        return resFail(res, 500, "Error updating transfer");
    }
};
export const transferById = async (req, res) => {
    const { transactionId} = req.body;
    try{
        const transfer = await TransactionModel.findById(transactionId);
        if (!transfer) {
            return resFail(res, 404, "Transaction not found");
        }
        resSuccess(res, 200, "Transfer details retrieved successfully", transfer);
    } catch (error) {
        logger.error(`${error.stack}`)
        return resFail(res, 500, "Error updating transfer");
    }
};
export const transferByUserId = async (req, res) => {
    const { UserId, page } = req.params;
    try {
        
    } catch (error) {
        
    }
};
export const deleteTransfer = async (req, res) => {

};
export const allTransfers = async (req, res) => {

};
