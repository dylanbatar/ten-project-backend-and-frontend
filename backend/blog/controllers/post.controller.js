const POST = require("../models/post.model");
let postController = {};

postController.createPost = async (req, res) => {
  let { user } = req.params;
  let { title, content } = req.body;

  let NEW_POST = await new POST({
    user,
    title,
    content,
  });

  NEW_POST.save()
    .then((post) => {
      res.json({ ok: true, data: post, message: "Post created successfully" });
    })
    .catch((err) => {
      res.json({
        ok: false,
        data: null,
        message: "Sorry we could not create your post",
        error: err,
      });
    });
};

postController.updatePost = async (req, res) => {
  let { user, post } = req.params;
  let { title, content } = req.body;

  let post_result = POST.findOneAndUpdate(
    { _id: post, user },
    { $set: { title, content } },
    {
      new: true,
      runValidators: true,
    }
  );

  post_result
    .exec()
    .then((post) => {
      if (post === null) {
        return res.json({
          ok: false,
          data: null,
          message: "You aren't the owner of this post",
          error: err,
        });
      }
      res.json({ ok: true, data: post, message: "Post updated successfully" });
    })
    .catch((err) =>
      res.json({
        ok: false,
        data: null,
        message: "Error we could not update this post",
        error: err,
      })
    );
};

postController.deletePost = async (req, res) => {
  let { user, post } = req.params;

  POST.findOneAndDelete({ user, _id:post })
    .then((post) => {
      if (post === null) {
        return res.json({
          ok: false,
          data: null,
          message: "You aren't the owner of this post",
          error: err,
        });
      }
      res.json({ ok: true, data: null, message: "Post deleted successfully" });
    })
    .catch((err) =>
      res.json({
        ok: false,
        data: null,
        message: "Error we could not update this post",
        error: err,
      })
    );
};

module.exports = postController;
