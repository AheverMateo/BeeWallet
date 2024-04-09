import mongoose from "mongoose";

const schema = new mongoose.Schema(
   {
      fullName: { type: String, required: true, max: 150 },
      dateOfBirth: Date,
      email: { type: String, required: true, max: 150, unique: true },
      password: { type: String, required: true, max: 50 },
      address: {
         street: { type: String, max: 150 },
         city: { type: String, max: 150 },
         state: { type: String, max: 150 },
         country: { type: String, max: 150 },
         zipCode: { type: String, max: 150 },
      },
      roles: { type: [String], required: true, default: ["User"] },
      isBlocked: { type: Boolean, required: true, default: false },
      loginType: { type: String, default: "Normal" },
      isVerified: { type: Boolean, default: false, required: true },
      vfToken: { type: String, default: 0 },
      pwResetToken: { type: String, default: null },
      pwResetTokenExpire: { type: Date, default: null },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

const UsersModel = mongoose.model("users", schema);

export default UsersModel;
