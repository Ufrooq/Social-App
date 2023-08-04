import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { registerUser } from "./Controllers/auth.js";

// CONFIGURATIONS --->
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE SYSTEM --->
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", registerUser);

// MongoDB Connection --->
const port = process.env.PORT || 6001;
const connectionFunction = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL);
    console.log("----> Connection Successfully Established with db <----");
  } catch (error) {
    console.log(error);
  }
};
connectionFunction();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
