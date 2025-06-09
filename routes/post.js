const router = require('express').Router();
const Post = require('../controllers/Post');

// Get all posts
router.get('/', Post.getAllPosts);

module.exports = router;
