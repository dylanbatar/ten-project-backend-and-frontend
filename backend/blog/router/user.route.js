const ROUTER = require("express").Router();
const USER_CONTROLLER = require("../controllers/user.controller");

ROUTER.post("/user/createUser",USER_CONTROLLER.createUser);
ROUTER.get("/user/userPost/:id", USER_CONTROLLER.getUserPost);

module.exports = ROUTER;