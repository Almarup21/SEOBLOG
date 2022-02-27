const User = require("../models/UserModel");
const shortId = require("shortid");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  // console.log(req.body);
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }

    const { name, email, password } = req.body;
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ name, email, password, profile, username });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      // res.json({
      //     user: success
      // });
      res.json({
        message: "Signup success! Please signin.",
      });
    });
  });
};

// console.log(req.body);
//   User.findOne({ email: req.body.email }).exec((err, user) => {
//     if (user) {
//       return res.status(400).json({
//         error: "Email is taken",
//       });
//     }

//     const { name, email, password } = req.body;
//     let username = shortId.generate();
//     let profile = `${process.env.CLIENT_URL}/profile/${username}`;

//     let newUser = new User({ name, email, password, profile, username });
//     newUser.save((err, success) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
// res.json({
//     user: success
// });
//       res.json({
//         message: "Signup success! Please signin.",
//       });
//     });
//   });
// };

// exports.signup = async (req, res) => {
/**
 * ! makesalt() is not function
 */

// const password = req.body.password;

// const salt = await bcrypt.genSalt(10);
// const hashed_password = await bcrypt.hash(password, salt);
// let username = shortId.generate();
// let profile = `${process.env.CLIENT_URL}/profile/${username}`;

// const newUser = new User({
//   name: req.body.name,
//   email: req.body.email,
//   password: hashed_password,
//   profile,
//   username,
// });

// await newUser
//   .save()
//   .then((result) => {
//     res.status(200).send(result);
//   })
//   .catch((err) => {
//     res.status(500).json(err);
//   });

// await User.findOne({ email: req.body.email }).exec((err, user) => {
//   if (user) {
//     return res.status(400).json({
//       error: "Email is taken",
//     });
//   }
//   const { name, email, password } = req.body;
//   const salt = await bcrypt.genSalt(10);
//   const hashed_password = await bcrypt.hash(password, salt);
//   let username = shortId.generate();
//   let profile = `${process.env.CLIENT_URL}/profile/${username}`;

//   let newUser = new User({
//     name,
//     email,
//     password: hashed_password,
//     profile,
//     username,
//   });

//   newUser.save((err, success) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     res.json({
//       user: success,
//     });
//   });
// });

// const { name, email, password } = req.body;
// res.json({
//   user: { name, email, password },
// });

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
