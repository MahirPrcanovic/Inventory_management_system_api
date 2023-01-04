const User = require("../models/User");
const jwt = require("jsonwebtoken");

const MAX_AGE = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: MAX_AGE,
  });
};
exports.signup = async (req, res) => {
  const { userName, password } = req.body;
  let existingUser;
  let savedUser;
  existingUser = await User.findOne({ userName });
  if (existingUser) {
    return res.status(400).json({ message: "User already exist!" });
  }
  const createdUser = new User({
    userName,
    passHash: password,
  });

  try {
    savedUser = await createdUser.save();
    const token = createToken(savedUser._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: MAX_AGE * 1000 }); //postavi cookie jwt, token, samo ce se moci pristupiti njemu sa backenda, traje 3 dana, brise se poslije tog
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(201).json({ user: savedUser._id });
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.login(userName, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: MAX_AGE * 1000 }); //postavi cookie jwt, token, samo ce se moci pristupiti njemu sa backenda, traje 3 dana, brise se poslije tog
    return res.status(200).json({ user: user._id });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
