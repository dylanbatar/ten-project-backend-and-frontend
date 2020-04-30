const ROUTER = require("express").Router();
const POST_CONTROLLER = require("../controllers/post.controller");

ROUTER.post("/post/createPost/:user", POST_CONTROLLER.createPost);
ROUTER.put("/post/updatePost/:user/:post", POST_CONTROLLER.updatePost);
ROUTER.delete("/post/deletePost/:user/:post", POST_CONTROLLER.deletePost);

module.exports = ROUTER;
