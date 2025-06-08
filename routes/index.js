const router = require('express').Router();
const post = require('./post');

// Get all posts
router.get('/', post);

module.exports = router;
