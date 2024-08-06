const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("Database Connection Establish");
      })
      .catch((err) => {
        console.log("Database Connection Failed");
      });
  } catch (err) {
    console.log("Internal Error Occured");
    console.log(err);
  }
};

module.exports = dbConnection;
