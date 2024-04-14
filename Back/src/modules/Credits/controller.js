import CreditModel from "./schema.js";
import WalletModel from "../Wallets/schema.js"
import { logger } from "../../config/logger.js";
import BigNumber from "bignumber.js";
import { resSuccess, resFail } from "../../config/utils/response.js";
import { addWalletBalance } from "../Wallets/services.js";

export const newCredit = async (req, res) => {
    const { userId, walletId, quantity, billingCycles, taxPercentage, dueDate} = req.body;
    try{

        const wallet = await WalletModel.findById(walletId);

        if(!wallet){
            return res.status(404).json({success: false, message: "This wallet doesn't exist!"})
        }
        const total = (quantity + ((taxPercentage / 100) * quantity))
        const totalQuota = total / billingCycles;

        const newCredit = new CreditModel({
            userId: userId,
            walletId: walletId,
            quantity: quantity,
            status: "active",
            quota: totalQuota,
            billingCyclesLeft: billingCycles,
            nextBillingDate: new Date(Date.now() + 2592000000),
            leftToPay: total,
            taxPercentage: taxPercentage,
            dueDate: dueDate
        })

        await newCredit.save();
        await addWalletBalance(walletId, quantity);

        return resSuccess(res, 201, "Credit created successfully", newCredit);
    } catch(error){
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const updateCredit = async (req, res) => {
    const { creditId, totalCharged } = req.body;
    try{

        const credit = await CreditModel.findOne({ _id: creditId});

        if(!credit){
            return res.status(404).json({ success: false, message: "This credit doesn't exist!" })
        }

        if(credit.billingCyclesLeft === 1 && parseFloat(credit.leftToPay) === parseFloat(credit.quota)){
            await CreditModel.updateOne({ _id: creditId}, {
                status: "inactive",
                leftToPay: 0,
                billingCyclesLeft: 0,
                updatedAt: new Date(Date.now())
            })
            } else {
            await CreditModel.updateOne({ _id: creditId}, {
                leftToPay: credit.leftToPay - totalCharged,
                nextBillingDate: new Date(Date.now() + 2592000000),
                billingCyclesLeft: credit.billingCyclesLeft - 1,
                updatedAt: new Date(Date.now())
            });
        }
        
        return resSuccess(res, 204, "Credit updated!", credit);

    } catch(error){
        logger.error(`${error.stack}`)
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//This function returns one specific credit

export const getCredit = async (req, res) => {
    const { id } = req.params;
    try{
        const credit = await CreditModel.findById(id);
        
        if(!credit){
            return res.status(404).json({success: false, message: "This credit doesn't exist!"});
        }

        return resSuccess(res, 200, "Credit found!", credit);

    } catch(error){
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//This function returns all user debt.

export const getUserDebt = async (req, res) => {
    const { id } = req.params;

    try{
        const userCredits = await CreditModel.countDocuments({ userId: id });
        
        if(userCredits === 0){
            return res.status(404).json({ success: true, message: "This user doesn't have debts." });
        } 
        const credits = await CreditModel.find({ userId: id }, 'leftToPay');

        const debtValues = credits.map((obj) => {
            return parseFloat(obj.leftToPay);
        });

        const totalDebt = debtValues.reduce((a, b) => a + b);
        return resSuccess(res, 200, "Debt found!", totalDebt);

    } catch(error){
        return res.status(500).json({ success: false, message: error.stack});
    }
}

//This function returns all credits that one user has.

export const getAllUserCredits = async (req, res) => {
    const { id } = req.params;
    try{
        const credit = await CreditModel.find({ userId: id});
        if(!credit){
            return res.status(404).json({success: true, message: "This user has no credits"});
        }

        return resSuccess(res, 200, "Credits found on this user!", credit);
    } catch(error){
        logger.error(`${error.stack}`)
        return res.status(500).json({ success: false, message: error });
    }
}

// Just in case that user deletes his account

export const deleteCredit = async (req, res) => {
    const { id } = req.params;
    try{
        const credit = await CreditModel.findById({ _id: id});

        if(!credit){
            return res.status(404).json({success: false, message: "Credit not found"});
        }

        await CreditModel.deleteOne({_id: id});
        resSuccess(res, 200, "Credit deleted successfully!");

    } catch(error){
        return res.status(500).json({ success: false, message: error.stack });
    }
}