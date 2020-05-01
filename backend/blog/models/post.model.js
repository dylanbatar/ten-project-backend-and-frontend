const MONGOOSE = require("mongoose");

const SCHEMA = MONGOOSE.Schema;

const postModel = new SCHEMA({
  user: { type: SCHEMA.Types.ObjectId, ref: "user" },
  title: { type: String, required: true },
  content: { type: String, minlength: 10 },
  date: { type: String },
});

module.exports = MONGOOSE.model("post", postModel);
