import { logger } from "../../config/logger.js";
import { resFail, resSuccess } from "../../config/utils/response.js";
import InvestmentModel from "./schema.js";
import { getWallet } from "../Wallets/services.js";
import investmentService from "./service.js";

/**
 * Allows you to create an investment.
 * must be received in the request body:
 *    - amount: number = amount to invest
 *    -
 * @param {*} req
 * @param {*} res
 */
async function createInvestment(req, res) {
   try {
      const { amount, days, walletId } = req.body;

      // verifico el plazo en días para la inversión
      if (days < 30 && days > 365)
         return resFail(res, 400, "The term must be at least 30 days and less than 365 days");

      const wallet = await getWallet(walletId);

      if (!wallet) return resFail(res, 400, "Wallet not found");

      // verifico que el monto a invertir sea menor al disponible
      if (amount > Number(wallet.balance) || amount < 1000)
         return resFail(
            res,
            400,
            "The amount to be invested must be less than the available amount"
         );

      const investmentSaved = await investmentService.createInvestment(amount, days, walletId);

      if (!investmentSaved) {
         return resFail(res, 400, "The investment could not be made");
      }

      return resSuccess(res, 201, "Investment made successfully", investmentSaved);
   } catch (error) {
      logger.error(`${error.stack}`);
      if (error instanceof Error)
         return res.status(400).json({ success: false, message: error.message });
      return res.status(500).json({ success: false, message: "Internal Server Error" });
   }
}

/**
 * Allows get a Investment by ID
 * The ID must be received by params
 * /investments/:id
 * @param {*} req
 * @param {*} res
 */
async function getInvestment(req, res) {
   const { id } = req.params;
   try {
      const investment = await InvestmentModel.findById(id);
      if (!investment) {
         return resFail(res, 404, "Investment not found");
      }
      resSuccess(res, 200, "Investment found", investment);
   } catch (error) {
      logger.error(`${error.stack}`);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
   }
}

/**
 * Allows get all Investment generated by a wallet
 * The ID must be received by params
 * /investments/wallet/:id
 * @param {*} req
 * @param {*} res
 */
async function getAllInvestmentByWallet(req, res) {
   const { id } = req.params;
   try {
      const investments = await investmentService.getAllInvestmentByWallet(id);

      return resSuccess(res, 200, "Data found", investments);
   } catch (error) {
      logger.error(`${error.stack}`);
      if (error instanceof Error)
         return res.status(400).json({ success: false, message: error.message });
      return res.status(500).json({ success: false, message: "Internal Server Error" });
   }
}

/**
 * Allows simulate a Investment
 * must be received in the request:
 *    - amount: number = amount to invest
 *    - days: number = days to invest
 * @param {*} req
 * @param {*} res
 */
function simulateInvestment(req, res) {
   try {
      const { amount, days } = req.body;

      const payload = investmentService.getSimulateInvestment(amount, days);

      return resSuccess(res, 200, "Investment simulation", payload);
   } catch (error) {
      logger.error(`${error.stack}`);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
   }
}

const investmentController = {
   createInvestment,
   getAllInvestmentByWallet,
   getInvestment,
   simulateInvestment,
};

export default investmentController;