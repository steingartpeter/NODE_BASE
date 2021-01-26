const express = require("express");
const feedController = require("../controllers/feed");
const router = express.Router();

// GET feed/posts
reouter.get("/posts", feedController.getPosts);

module.exports = router;
