const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picUrl: {
    type: String,
    required: true,
  },
  profitMargin: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productionProcess: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductionProcess",
    required: true,
  },
});

module.exports = mongoose.model("Product", productScheme);
