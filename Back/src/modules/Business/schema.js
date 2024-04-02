import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema({
  businessName: { type: String, required: true },
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
  },
  contactEmail: String,
  contactPhone: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model('Business', businessSchema);
