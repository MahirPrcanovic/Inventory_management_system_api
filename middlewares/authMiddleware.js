const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token)
    res.status(403).json({ message: "You are not authorized for this route." });
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err)
      res
        .status(403)
        .json({ message: "You are not authorized for this route." });
  });
};
module.exports = { requireAuth };
