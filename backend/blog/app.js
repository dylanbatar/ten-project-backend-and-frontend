require("./config/config");
require("./db/db");
const express = require("express");
const app = express();

// CONFIG
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use(require("./router/index"));

// PORT
app.listen(process.env.PORT, () => {
  console.log("SERVER ONLINE", process.env.PORT);
});
