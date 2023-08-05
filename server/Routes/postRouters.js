import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../Controllers/posts.js";

const router = express.Router();

router.get("/", getFeedPosts);
router.get("/", getUserPosts);
router.get("/", likePost);

export default router;
