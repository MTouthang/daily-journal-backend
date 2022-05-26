const express = require("express");
const router = express.Router();

// imports from controller
const {
  createPost,
  getPosts,
  getPostId,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/post");
const { update } = require("../models/Post");

router.param("postId", getPostId);

//routes
router.post("/post", createPost);
router.get("/posts", getPosts);
router.get("/post/:postId", getPostById);
router.put("/post/:postId", updatePost);
router.delete("/post/:postId", deletePost);

// router
module.exports = router;
