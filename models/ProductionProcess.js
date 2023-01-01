const mongoose = require("mongoose");

const productionProcessScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  productionProcessItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductionProcessItem",
    },
  ],
});

module.exports = mongoose.model("ProductionProcess", productionProcessScheme);
