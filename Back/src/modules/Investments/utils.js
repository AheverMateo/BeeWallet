export const TNA = 0.7;

export function calculateEarnedInterests(amount, days) {
   //earnedInterests = amount * (tna * days / 365)
   return amount * ((TNA * days) / 365);
}

export function getFinishDate(days) {
   let finishDate = new Date();
   finishDate.setDate(finishDate.getDate() + days);
   
   return finishDate;
}
