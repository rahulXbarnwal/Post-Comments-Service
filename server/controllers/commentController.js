import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  const { message } = req.body;
  const comment = new Comment({
    message,
    user: req.user.id,
    post: req.params.postId,
  });
  try {
    const newComment = await comment.save();
    await Post.findByIdAndUpdate(req.params.postId, {
      $push: { comments: newComment._id },
    });
    await User.findByIdAndUpdate(req.user.id, {
      $push: { comments: newComment._id },
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
