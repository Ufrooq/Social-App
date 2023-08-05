import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/user.js";
import dotenv from "dotenv";
dotenv.config();

// REGISTERING THE USER
export const registerUser = async (req, res) => {
  try {
    console.log("registerUser");
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

// LOGIN THE USER
export const loginUser = async (req, res) => {
  try {
    console.log("loginUser");
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const excessToken = jwt.sign(
        {
          user: {
            firstName: user.firstName,
            email: user.email,
            id: user.id,
          },
        },
        process.env.EXCESS_TOKEN,
        { expiresIn: "15m" }
      );
      delete user.password;
      res.status(200).json({ excessToken });
    } else {
      res.status(400);
      throw new Error("Error occured !!");
    }
  } catch (error) {
    console.log("Error ---> ", error);
    res.status(500).json({ error: error.message });
  }
};
