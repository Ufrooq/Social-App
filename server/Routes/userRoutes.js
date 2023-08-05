import express from "express";
import { validatetoken } from "../Middleware/validateToken.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../Controllers/users.js";
const router = express.Router();

// validatetoken
router.get("/:id", validatetoken, getUser);
router.get("/:id/friends", validatetoken, getUserFriends);
router.patch("/:id/:friendId", validatetoken, addRemoveFriend);

export default router;
