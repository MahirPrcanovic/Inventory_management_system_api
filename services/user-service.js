const User = require("../models/User");
exports.signup = async (req, res) => {
  const { userName, password } = req.body;
  let existingUser;
  existingUser = await User.findOne({ userName });
  if (existingUser) {
    return res.status(400).json({ message: "User already exist!" });
  }
  const createdUser = new User({
    userName,
    passHash: password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(201).json({ createdUser });
};

exports.login = async (req, res) => {
  res.send("user login");
};
