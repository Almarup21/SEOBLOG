// harus menggunakan kurung kurawal karena bukan function
const { check } = require("express-validator");

exports.userSignupValidator = [
  // cek dalam form data
  check("name")
    .not()
    .isEmpty()
    // nenampilkan pesan
    .withMessage("Name is required"),
  check("email").isEmail().withMessage("Must Be a valid email address"),
  check("password")
    // jika password kurang dari 6
    .isLength({ min: 6 })
    // akan menampilkan pesan
    .withMessage("Password must be at least 6 characters long"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must Be a valid email address"),
  check("password")
    // jika password kurang dari 6
    .isLength({ min: 6 })
    // akan menampilkan pesan
    .withMessage("Password must be at least 6 characters long"),
];
