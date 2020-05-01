const ROUTER = require("express").Router();
const USER_CONTROLLER = require("../controllers/user.controller");

ROUTER.post("/user/register", USER_CONTROLLER.registerUser);
ROUTER.post("/user/login", USER_CONTROLLER.loginUser);
ROUTER.get("/user/userPost/:id", USER_CONTROLLER.getUserPost);

module.exports = ROUTER;
