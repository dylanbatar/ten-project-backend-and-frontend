const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const userModel = new SCHEMA({
  username: {
    type: String,
    minlength: 4,
    maxlength: 10,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  post: [{ type: SCHEMA.Types.ObjectId, ref: "post" }],
});

module.exports = MONGOOSE.model("user", userModel);
