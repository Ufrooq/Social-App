import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const validatetoken = async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.EXCESS_TOKEN, (err, decoded) => {
        if (err) {
          res.status(400);
          throw new Error("Tokken is expired !!");
        }
        req.user = decoded.user;
        next();
      });
    }
    if (!token) {
      res.status(400);
      throw new Error("Access Denied!!");
    }
  } catch (error) {
    console.log("Error  ", error);
    res.status(500).json({ error: error.message });
  }
};
