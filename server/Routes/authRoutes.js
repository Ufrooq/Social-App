import express from "express";
import { loginUser } from "../Controllers/auth.js";
const router = express.Router();

router.post("/login", loginUser);

export default router;
