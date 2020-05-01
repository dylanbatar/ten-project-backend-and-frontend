const USER = require("../models/user.model");
const POST = require("../models/post.model");
const BCRYPT = require("bcrypt");

let userController = {};

userController.registerUser = async (req, res) => {
  let { username, email, password } = req.body;

  let hash = BCRYPT.hashSync(password, 10);

  const NEW_USER = await new USER({
    username,
    email,
    password: hash,
  });

  NEW_USER.save()
    .then((user) => {
      res.json({
        ok: true,
        data: user,
        message: "User created succesfully",
      });
    })
    .catch((err) => {
      res.json({
        ok: false,
        data: null,
        message: "Error",
        error: err,
      });
    });
};

userController.loginUser = async (req, res) => {
  let { username, email, password } = req.body;

  USER.findOne({ $or: [{ username }, { email }] })
    .then((user) => {
      if (user === null) {
        return res.json({
          ok: false,
          data: null,
          message: "Email o username not found",
        });
      }

      console.log(BCRYPT.compareSync(password, user.password));

      if (!BCRYPT.compareSync(password, user.password)) {
        return res.json({ ok: false, data: null, message: "Password error" });
      }

      res.json({ ok: true, data: user, message: `Welcome ${user.username}` });
    })
    .catch((err) => {
      return res.json({
        ok: false,
        data: null,
        message: "Somenthing is wrong",
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
