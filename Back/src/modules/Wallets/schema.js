import mongoose, { Types, model } from 'mongoose';
const { Schema } = mongoose;

const walletSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  cvu: { type: Number, required: true, unique: true },
  currency: { type: String, required: true, default: "ARS" },
  balance: { type: Types.Decimal128, required: true },
  transactions: [ { type: Schema.Types.ObjectId, ref: 'Transaction' } ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model('Wallet', walletSchema);
