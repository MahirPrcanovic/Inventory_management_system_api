const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uin: {
    type: String,
    required: true,
  },
  pdv: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfStart: {
    type: Date,
    required: true,
  },
  dateOfEnd: {
    type: Date,
  },
  materials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material",
    },
  ],
});

module.exports = mongoose.model("Supplier", supplierSchema);
