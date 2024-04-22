import CreditModel from "./schema.js";
import { logger } from "../../config/logger.js";
import { createCredit, updateCreditDebt, getUserTotalDebt } from "./service.js";
import { resSuccess, resFail } from "../../config/utils/response.js";

export const newCredit = async (req, res) => {
  const { userId, walletId, quantity, billingCycles, taxPercentage, dueDate } = req.body;
  try {
    const newCredit = await createCredit(userId, walletId, quantity, billingCycles, taxPercentage, dueDate);

    return resSuccess(res, 201, "Credit created successfully", newCredit);
  } catch (error) {
    if(error.statuscode === 404){
      return resFail(res, 404, error.message, error);
    }
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Internal server error", error.stack);
  }
};

export const updateCredit = async (req, res) => {
  const { creditId, totalCharged } = req.body;
  try {
    const credit = await updateCreditDebt(creditId, totalCharged);

    return resSuccess(res, 204, "Credit updated!", credit);
  } catch (error) {
    if(error.statuscode === 404){
      return resFail(res, 404, error.message, error);
    }
    logger.error(`${error.stack}`);
    return resFail(res, 500, "Internal server error", error.stack);
  }
};

// This function returns one specific credit

export const getCredit = async (req, res) => {
  const { id } = req.params;
  try {
    const credit = await CreditModel.findById(id);

    if (!credit) {
      return res.status(404).json({ success: false, message: "This credit doesn't exist!" });
    }

    return resSuccess(res, 200, "Credit found!", credit);
  } catch (error) {
    logger.error(`${error.stack}`);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// This function returns all user debt.

export const getUserDebt = async (req, res) => {
  const { id } = req.params;

  try {
    const totalDebt = await getUserTotalDebt(id);

    return resSuccess(res, 200, "Debt found!", totalDebt);
  } catch (error) {
    if(error.statuscode === 404){
      return resFail(res, 404, error.message, error);
    }
    return res.status(500).json({ success: false, message: error.stack });
  }
};

// This function returns all credits that one user has.

export const getAllUserCredits = async (req, res) => {
  const { id } = req.params;
  try {
    const credit = await CreditModel.find({ userId: id });
    if (!credit) {
      return res.status(404).json({ success: true, message: "This user has no credits" });
    }

    return resSuccess(res, 200, "Credits found on this user!", credit);
  } catch (error) {
    logger.error(`${error.stack}`);
    return res.status(500).json({ success: false, message: error });
  }
};

// Just in case that user deletes his account

export const deleteCredit = async (req, res) => {
  const { id } = req.params;
  try {
    const credit = await CreditModel.findById({ _id: id });

    if (!credit) {
      return res.status(404).json({ success: false, message: "Credit not found" });
    }

    await CreditModel.deleteOne({ _id: id });
    resSuccess(res, 200, "Credit deleted successfully!");
  } catch (error) {
    return res.status(500).json({ success: false, message: error.stack });
  }
};
