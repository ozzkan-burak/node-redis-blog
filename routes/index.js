const router = require('express').Router();
const post = require('./post');

// Get all posts
router.use('/', post);

module.exports = router;
