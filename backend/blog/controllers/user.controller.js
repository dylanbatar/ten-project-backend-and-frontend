const USER = require("../models/user.model");
const POST = require("../models/post.model");
let userController = {};

userController.createUser = async (req, res) => {
  let { username, email } = req.body;

  const NEW_USER = await new USER({
    username,
    email,
  });

  NEW_USER.save()
    .then((user) => {
      res.json({
        ok: true,
        data: user,
        message: "Usuario creado correctamente",
      });
    })
    .catch((err) => {
      res.json({
        ok: false,
        data: null,
        message: "Error en al creacion",
        error: err,
      });
    });
};

userController.getUserPost = async (req, res) => {
  let { id } = req.params;

  let { limit, skip } = req.query;

  if (limit != undefined && skip != undefined) {
    limit = Number(limit);
    skip = Number(skip);
  }

  const user = await USER.findById(id);
  const post = await POST.find({ user: id });

  user.post = post.map((value) => value._id);

  await user
    .populate({
      path: "post",
      select: "title content",
      options: { limit, skip },
    })
    .execPopulate()
    .then((user) =>
      res.json({ ok: true, data: user, message: "Query success" })
    )
    .catch((err) =>
      res.json({
        ok: false,
        data: null,
        message: "User not found, try more later",
        error: err,
      })
    );
};

module.exports = userController;
