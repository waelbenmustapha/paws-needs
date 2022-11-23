const mongoose = require("mongoose");
const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Add a Name"],
  },
  image: {
    type: String,
    required: [true, "Please Add an Image"],
  },
  serviceCategory: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceCategory" },
});

module.exports = mongoose.model("Service", ServiceSchema);
