// harus menggunakan kurung kurawal karena bukan function
const { check } = require("express-validator");

exports.tagValidator = [
  // cek dalam form data
  check("name")
    .not()
    .isEmpty()
    // nenampilkan pesan
    .withMessage("Name is required"),
];
