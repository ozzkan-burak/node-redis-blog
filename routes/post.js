const router = require('express').Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', Post.getAllPosts);

module.exports = router;
