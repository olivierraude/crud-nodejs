const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likedPost, dislikedPost } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

router.patch("/liked-post/:id", likedPost);

router.patch("/disliked-post/:id", dislikedPost);

module.exports = router;