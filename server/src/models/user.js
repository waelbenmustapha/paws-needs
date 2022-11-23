const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      trim: true,
      required: [true, "Please Add a name"],
    },
    email: {
      type: String,
      required: [true, "Please Add an email"],
      trim: true,
      unique: true,
      validate: [validator.isEmail, "entered email is invalid.."],
    },
    password: {
      type: String,
      required: [true, "please add a password"],
      minLength: 8,
      select: false,
    },
    address: {
      name: { type: String, required: false, default: null },
      street: { type: String, required: false, default: null },
      city: { type: String, required: false, default: null },
      longitude: { type: Number, required: false, default: null },
      latitude: { type: Number, required: false, default: null },
    },
    profile_pic: { type: String, required: false, default: null },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
