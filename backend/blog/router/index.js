const express = require("express");
const app = express();

app.use(require("../router/user.route"))
app.use(require("../router/post.route"))


module.exports = app;

