// harus menggunakan kurung kurawal karena bukan function
const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  // mengirim request/parameter dari validators/auth
  const errors = validationResult(req);
  // jika kosong
  if (!errors.isEmpty()) {
    // kirimkan pesan
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  next();
};
