import mongoose, { Types, model } from "mongoose";
const { Schema } = mongoose;

const walletSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cvu: { type: String, required: true, unique: true },
  currency: { type: String, required: true, default: "ARS" },
  balance: { type: Types.Decimal128, required: true },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Function to generate a random 22-digit CVU
function generateRandomCVU () {
  let cvu = "";
  for (let i = 0; i < 22; i++) {
    cvu += Math.floor(Math.random() * 10); // Generates a random digit from 0 to 9
  }
  return cvu;
}

// Function to create a unique CVU
async function createUniqueCVU () {
  let unique = false;
  let newCVU;
  while (!unique) {
    newCVU = generateRandomCVU();
    const wallet = await Wallet.findOne({ cvu: newCVU });
    if (!wallet) {
      unique = true;
    }
  }
  console.log(newCVU + " created.");
  return newCVU;
}

// Add the static method to the Wallet schema to use elsewhere
walletSchema.statics.createUniqueCVU = createUniqueCVU;

const Wallet = model("Wallet", walletSchema);

export default Wallet;
