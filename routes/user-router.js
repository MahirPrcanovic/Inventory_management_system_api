const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");

router.post("/signup", userService.signup);
router.post("/login", userService.login);
router.get("/logout", userService.logout);
router.patch("/:id", userService.editUser);
router.patch("/changePass/:id", userService.changePassword);
module.exports = router;
