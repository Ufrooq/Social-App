import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../Controllers/posts.js";
import { validatetoken } from "../Middleware/validateToken.js";

const router = express.Router();

router.get("/", validatetoken, getFeedPosts);
router.get("/", getUserPosts);
router.get("/", likePost);

export default router;
