import express from "express";
import { getComment, createComment } from "../controllers/commentController.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

const router = express.Router();

router.get("/:id", authenticateUser, getComment);
router.post("/:postId", authenticateUser, createComment);

export default router;
