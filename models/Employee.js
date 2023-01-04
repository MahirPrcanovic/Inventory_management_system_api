const mongoose = require("mongoose");
const { isEmail } = require("validator");
const employeeScheme = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a email."],
    validate: [isEmail, "Please enter a valid email."],
  },
  dateOfJoin: {
    type: Date,
    required: true,
  },
  dateOfLeave: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Employee", employeeScheme);
