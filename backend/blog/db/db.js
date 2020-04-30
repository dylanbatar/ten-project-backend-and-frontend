const MONGOOSE = require("mongoose");

const OPTIONS = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

MONGOOSE.connect("mongodb://localhost:27017/blog", OPTIONS)
  .then(() => {
    console.log("BD IS WORK");
  })
  .catch((err) => {
    console.log("Fail conection", err);
  });
