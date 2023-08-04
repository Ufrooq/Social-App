import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    location: String,
    occupation: String,
    picturePath: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 20,
    },
    friends: {
      type: Array,
      default: [],
    },
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("UserModel", UserSchema);
