const Post = require("../models/Post");

// get post ID
exports.getPostId = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: `${err}`,
      });
    }
    req.post = post;
    next();
  });
};

// get post by id
exports.getPostById = (req, res) => {
  return res.json(req.post);
};

// create post
exports.createPost = (req, res) => {
  const post = new Post(req.body);

  post.save((err, post) => {
    if (err) {
      return res.status(400).json({
        error: `${err}`,
      });
    }
    res.json({ post });
  });
};

// get all the post
exports.getPosts = (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: `${err}`,
      });
    }
    res.json({ posts });
  });
};

// update post
exports.updatePost = (req, res) => {
  const post = req.post;
  post.title = req.body.title;
  post.content = req.body.content;

  post.save((err, updatePost) => {
    if (err) {
      return res.status(400).json({
        err: `{error}`,
      });
    }
    res.json(updatePost);
  });
};

// delete post
exports.deletePost = (req, res) => {
  Post.findByIdAndDelete(req.post.id).exec((err, post) => {
    if (err) {
      return res.status(400).json({
        error: `${err}`,
      });
    }
    return res.json("Deleted Successfully!");
  });
};
