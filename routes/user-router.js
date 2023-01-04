const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");

router.post("/signup", userService.signup);
router.post("/login", userService.login);

module.exports = router;
