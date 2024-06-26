import mongoose, { Types, model } from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
  type: { type: String, required: true },
  amount: { type: Types.Decimal128, required: true },
  currency: { type: String, required: true },
  fromWalletId: { type: Schema.Types.ObjectId, ref: "Wallet", required: true },
  toWalletId: { type: Schema.Types.ObjectId, ref: "Wallet" },
  status: { type: String, required: true, enum: ["Pending", "Success", "Failed"], default: "Pending" },
  deleted: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model("Transaction", transactionSchema);
