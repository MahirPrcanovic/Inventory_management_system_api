const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  minQuantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unitOfMeasure: {
    type: String,
    required: true,
  },
  isUsed: {
    type: Boolean,
    required: true,
    default: true,
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
});
module.exports = mongoose.model("Material", materialSchema);
