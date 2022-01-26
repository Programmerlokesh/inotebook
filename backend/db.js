const mongoose = require("mongoose");

const mongoUri =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoUri, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
