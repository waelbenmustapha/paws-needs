const mongoose = require("mongoose");

let conn = null;

module.exports = connectDatabase = async () => {
  if (conn == null) {
    console.log("Creating a new Connection to the Database");
    conn = await mongoose.connect(process.env.DB, {
      serverSelectionTimeoutMS: 15000,
    });
    return conn;
  }

  console.log(
    "Connection Already Established , reusing the cached connection BOIIII"
  );
};
