import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/user.js";

// REGISTERING THE USER

export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      location,
      occupation,
      picturePath,
      email,
      password,
      viewedProfile,
      impressions,
      friends,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      firstName,
      lastName,
      location,
      occupation,
      picturePath,
      email,
      password: hashPassword,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
      friends,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error  ", error);
    res.status(500).json({ error: error.message });
  }
};
