const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, default: null },
    street: { type: String, required: false, default: null },
    city: { type: String, required: false, default: null },
    longitude: { type: Number, required: false, default: null },
    latitude: { type: Number, required: false, default: null },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
