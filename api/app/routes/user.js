const {
  requireSignin,
  authMiddleware,
  read,
} = require("../controllers/UserController");

const express = require("express");
const router = express.Router();

router.get("/user/profile", requireSignin, authMiddleware, read);

module.exports = router;
