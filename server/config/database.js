const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

console.log("MongoDB URL: ", MONGODB_URL);  // Debugging line

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,  // Corrected typo here
      useUnifiedTopology: true,
    })
    .then(() => console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
