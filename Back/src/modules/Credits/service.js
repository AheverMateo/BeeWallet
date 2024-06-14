import CreditModel from "./schema.js";
import { logger } from "../../config/logger.js";
import WalletModel from "../Wallets/schema.js";
import { addUserWalletBalance } from "../Wallets/services.js";
import BigNumber from "bignumber.js";

export const createCredit = async (userId, walletId, quantity, billingCycles, taxPercentage, dueDate) => {
  try {
    const wallet = await WalletModel.find({ userId });

    if (!wallet) {
      throw new Error("This wallet does not exist!", { sucsess: false, statusCode: 404 });
    }
    const total = (quantity + ((taxPercentage / 100) * quantity));
    const totalQuota = total / billingCycles;

    const newCredit = new CreditModel({
      userId,
      walletId,
      quantity,
      quota: totalQuota,
      billingCyclesLeft: billingCycles,
      nextBillingDate: new Date(Date.now() + 2592000000),
      leftToPay: total,
      taxPercentage,
      dueDate,
    });

    await newCredit.save();
    await addUserWalletBalance(userId, quantity);
    return newCredit;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const updateCreditDebt = async (creditId, totalCharged) => {
  try {
    const credit = await CreditModel.findOne({ _id: creditId });

    if (!credit) {
      throw new Error("This credit does not exist!", { sucsess: false, statusCode: 404 });
    }

    const leftToPayParsed = new BigNumber(credit.leftToPay);
    const quotaParsed = new BigNumber(credit.quota);

    if (credit.billingCyclesLeft === 1 && leftToPayParsed === quotaParsed) {
      await CreditModel.updateOne({ _id: creditId }, {
        status: "inactive",
        leftToPay: 0,
        billingCyclesLeft: 0,
        updatedAt: new Date(Date.now()),
      });
      await credit.save();
    } else {
      await CreditModel.updateOne({ _id: creditId }, {
        leftToPay: credit.leftToPay - totalCharged,
        nextBillingDate: new Date(Date.now() + 2592000000),
        billingCyclesLeft: credit.billingCyclesLeft - 1,
        updatedAt: new Date(Date.now()),
      });
      await credit.save();
    }
    return credit;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};

export const getUserTotalDebt = async (id) => {
  try {
    const userCredits = await CreditModel.countDocuments({ userId: id });

    if (userCredits === 0) {
      throw new Error("This user doesn't have debts!", { sucsess: false, statusCode: 404 });
    }

    const credits = await CreditModel.find({ userId: id }, "leftToPay");

    const debtValues = credits.map((obj) => {
      return parseFloat(obj.leftToPay);
    });

    const totalDebt = debtValues.reduce((a, b) => a + b);
    return totalDebt;
  } catch (error) {
    logger.error(`${error.stack}`);
    throw error;
  }
};
