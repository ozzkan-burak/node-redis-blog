const router = require("express").Router();
const Post = require("../controllers/Post");

router.get("/", Post.getAll);

module.exports = router;
