import mongoose, { Types, model } from 'mongoose';
const { Schema } = mongoose;

const creditSchema = new Schema({
  userId: String,
  walletId: String,
  status: String,
  quantity: {type: Number, require: true},
  currency: {type: String, require: true, default: "ARS"},
  quota: {type: Types.Decimal128, require: true},
  leftToPay: Types.Decimal128,
  billingCyclesLeft: Number,
  billingIntervals: { type: String, default: "Monthly"},
  taxPercentage: Number,
  overDueTax: Number,
  nextBillingDate: { type: Date },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model('Credit', creditSchema);
