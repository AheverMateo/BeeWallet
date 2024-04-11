import { Schema, Types, model } from "mongoose";

const investmentSchema = new Schema(
   {
      days: { type: Number, required: true },
      amount: { type: Number, required: true },
      tna: { type: Number, required: true },
      earnedInterests: { type: Number },
      finishDate: { type: Date },
      walletId: { type: Types.ObjectId, ref: "Wallet", required: true },
   },
   { timestamps: true }
);

const InvestmentModel = model("Investment", investmentSchema);

export default InvestmentModel;
