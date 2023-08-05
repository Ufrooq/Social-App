import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connection = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL);
    console.log("----> Connection Successfully Established with db <----");
  } catch (error) {
    console.log(error);
  }
};
