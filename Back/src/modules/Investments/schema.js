import { Schema, Types, model } from "mongoose";

const investmentSchema = new Schema(
   {
      days: { type: Number, required: true },
      amount: { type: Types.Decimal128, required: true },
      currency: { type: String, required: true, default: "ARS" },
      tna: { type: Number, required: true },
      earnedInterests: { type: Types.Decimal128 },
      finishDate: { type: Date },
      walletId: { type: Types.ObjectId, ref: "Wallet", required: true },
   },
   { timestamps: true }
);

const InvestmentModel = model("Investment", investmentSchema);

export default InvestmentModel;
