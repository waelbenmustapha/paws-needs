const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please Add a Name"],
    },
    type: {
      type: String,
      required: [true, "Please Add a type"],
    },
    image: {
      type: String,
      required: [true, "Please Add an Image"],
    },
    breed: {
        type: String,
        required: [true, "Please Add an Image"],
      },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", PetSchema);
