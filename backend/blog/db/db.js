require("../config/config");
const MONGOOSE = require("mongoose");

const OPTIONS = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

MONGOOSE.connect(process.env.URI_DB, OPTIONS)
  .then(() => {
    console.log("BD IS WORK");
  })
  .catch((err) => {
    console.log("Fail conection", err);
  });
