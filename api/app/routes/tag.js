const { Create, List, Read, Delete } = require("../controllers/TagController");
const express = require("express");
const router = express.Router();

// validators
const { runValidation } = require("../validators/index");
const { tagValidator } = require("../validators/tag");
// pengecekan ketika membuat slug seorang admin atau bukan
const {
  adminMiddleware,
  requireSignin,
} = require("../controllers/UserController");

router.post(
  "/tag",
  tagValidator,
  runValidation,
  adminMiddleware,
  requireSignin,
  Create
);

router.get("/tag", List);
router.get("/tag/:slug", Read);
router.delete("/tag/:slug", Delete, requireSignin, adminMiddleware);

module.exports = router;
