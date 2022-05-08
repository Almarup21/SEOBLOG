const express = require("express");
const router = express.Router();
const {
  create,
  list,
  remove,
  read,
} = require("../controllers/CategoryController");

// validators
const { runValidation } = require("../validators");
const { categoryValidator } = require("../validators/category");
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/UserController");

router.post(
  "/category",
  categoryValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/categories", list);
router.get("/category/:slug", read);
router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
