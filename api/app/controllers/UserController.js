const User = require("../models/UserModel");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    user: { name, email, password },
  });

  // const Users = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  // await Users.save()
  //   .then((result) => {
  //     res.status(201).json(result);
  //   })
  //   .catch((err) => {
  //     res.status(500).json(err);
  //   });
};
