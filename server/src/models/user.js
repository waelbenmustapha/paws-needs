const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Add a name"],
  },
  email: {
    type: String,
    required: [true, "Please Add an email"],
    unique: true,
    validate: [validator.isEmail, "entered email is invalid.."],
  },
  password: {
    type: String,
    required: [true, "please add a password"],
    minLength: 6,
    select: false,
  },
});

module.exports = mongoose.model("User",UserSchema)
