class Post {
  static async getAllPosts(req, res, next) {
    res.render('home');
  }
}

module.exports = Post;
