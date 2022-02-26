const User = require("../controllers/UserController");
const express = require("express");
const router = express.Router();

// validators
const { runValidation } = require("../validators/index");
const { userSignupValidator } = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, User.signup);

module.exports = router;
