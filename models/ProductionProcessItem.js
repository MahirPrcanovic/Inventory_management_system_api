const mongoose = require("mongoose");

const productionProcessItemScheme = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  productionProcesses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductionProcess",
    },
  ],
});

module.exports = mongoose.model(
  "ProductionProcessItem",
  productionProcessItemScheme
);
