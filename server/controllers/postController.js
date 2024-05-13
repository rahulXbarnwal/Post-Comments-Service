import Post from "../models/Post.js";
import User from "../models/User.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate({
      path: "userId",
      select: "name",
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate({
      path: "comments",
      options: { sort: { createdAt: -1 } },
      select: "message createdAt user",
      populate: {
        path: "user",
        select: "name",
      },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, body } = req.body;
  const post = new Post({
    title,
    body,
    userId: req.user.id,
  });
  try {
    const newPost = await post.save();
    await User.findByIdAndUpdate(req.user.id, {
      $push: { posts: newPost._id },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
