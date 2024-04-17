import BigNumber from "bignumber.js";
import { resFail } from "../config/utils/response";

export const bigNumberValidations = (req, res, next) => {
   const { amount } = req.body;
   if (new BigNumber(amount).lte(0)) {
      return resFail(res, 400, "Amount must be greater than zero");
   }

   // For removing balance, also check if the balance will not become negative
   if (new BigNumber(wallet.balance).minus(amount).isNegative()) {
      return resFail(res, 400, "Insufficient balance");
   }
   next();
};
