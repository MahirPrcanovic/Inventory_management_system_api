const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  passHash: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
});

module.exports = mongoose.model("User", userScheme);
