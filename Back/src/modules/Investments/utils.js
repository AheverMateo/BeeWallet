export const TNA = 0.6;

export function calculateEarnedInterests(amount, days) {
   //earnedInterests = amount * (tna * days / 365)
   return parseFloat((amount * ((TNA * days) / 365)).toFixed(2));
}

export function getFinishDate(days) {
   let finishDate = new Date();
   finishDate.setDate(finishDate.getDate() + days);

   return finishDate;
}
