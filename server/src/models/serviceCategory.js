const mongoose = require("mongoose");
const ServiceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Add a Name"],
  },
  image: {
    type: String,
    required: [true, "Please Add an Image"],
  },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
});

module.exports = mongoose.model("ServiceCategory", ServiceCategorySchema);
