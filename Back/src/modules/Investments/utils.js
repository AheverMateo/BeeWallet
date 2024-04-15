import BigNumber from "bignumber.js";

export const TNA = 0.6;

export function calculateEarnedInterests(amount, days) {
   //earnedInterests = amount * (tna * days / 365)
   return new BigNumber(amount * ((TNA * days) / 365)).toFixed(2).toString();
}

export function getFinishDate(days) {
   let finishDate = new Date();
   finishDate.setDate(finishDate.getDate() + days);

   return finishDate;
}
