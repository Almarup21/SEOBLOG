const User = require("../controllers/UserController");
const express = require("express");
const router = express.Router();

router.post("/signup", User.signup);

module.exports = router;
