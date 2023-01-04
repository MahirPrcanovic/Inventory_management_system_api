const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userScheme = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username must not be empty."],
    unique: true,
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
userScheme.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.passHash = await bcrypt.hash(this.passHash, salt);
  next();
});
module.exports = mongoose.model("User", userScheme);
