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
import { Connection } from "./Connection/dbConnectioin.js";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import postRoutes from "./Routes/postRouters.js";
import cookieParser from "cookie-parser";

import { validatetoken } from "./Middleware/validateToken.js";

// CONFIGURATIONS --->
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// MongoDB Connection --->
Connection();

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

/* ROUTES FOR FILES */
app.post("/auth/register", upload.single("picture"), registerUser);

/* ROUTES FOR AUTHORIZATION */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MAKING SERVER LIVE*/
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
