import express from "express";
import {
  getPost,
  createPost,
  getAllPosts,
} from "../controllers/postController.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

const router = express.Router();

router.get("/", authenticateUser, getAllPosts);
router.get("/:id", authenticateUser, getPost);
router.post("/", authenticateUser, createPost);

export default router;
