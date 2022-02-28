const User = require("../controllers/UserController");
const express = require("express");
const router = express.Router();

// validators
const { runValidation } = require("../validators/index");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, User.signup);
router.post("/signin", userSigninValidator, runValidation, User.signin);
router.get("/signout", User.signout);

//  test
router.get("/secret", User.requireSignin, (req, res) => {
  res.json({
    message: "you have access secret page",
  });
});

module.exports = router;
