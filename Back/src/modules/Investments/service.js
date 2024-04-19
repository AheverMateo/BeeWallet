import { removeUserWalletBalance } from "../Wallets/services.js";
import InvestmentModel from "./schema.js";
import { TNA, calculateEarnedInterests, getFinishDate } from "./utils.js";

async function createInvestment(amount, days, walletId) {
   try {
      // actualizo el balance de la wallet, restando el valor a invertir
      const balanceUpdated = await removeUserWalletBalance(walletId, amount);

      if (!balanceUpdated) throw new Error("The investment could not be made");

      // cargo los datos de payload para crear una inversion
      const payload = { ...getSimulateInvestment(amount, days), walletId };

      const investment = new InvestmentModel(payload);

      return await investment.save();
   } catch (error) {
      throw error;
   }
}

async function getAllInvestmentByWallet(walletId) {
   try {
      return await InvestmentModel.find({ walletId });
   } catch (error) {
      throw error;
   }
}

function getSimulateInvestment(amount, days) {
   const earnedInterests = calculateEarnedInterests(amount, days);
   const finishDate = getFinishDate(days);

   const payload = { amount, days, tna: TNA, earnedInterests, finishDate };

   return payload;
}

const investmentService = {
   createInvestment,
   getSimulateInvestment,
   getAllInvestmentByWallet,
};

export default investmentService;
