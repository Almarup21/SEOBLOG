const User = require("../models/UserModel");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.signup = (req, res) => {
  // console.log(req.body);
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }
    const { email, password, name } = req.body;
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({
      name,
      username,
      email,
      password,
      profile,
    });

    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({ user: success });
    });
  });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  // cek user apakah sudah dibuat/ada
  User.findOne({ email }).exec((err, user) => {
    if (!user || err) {
      return res.status(400).json({
        error: "User dosent exist",
      });
    }

    // authenticate
    // apakah password sama ?
    if (!user.authenticate(password)) {
      res.status(400).json({
        error: "Email and password do not match",
      });
    }

    // generate token dan kirim ke client
    const token = jwt.sign({ _id: User._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, email, role } = user;
    return res.json({
      token,
      user,
    });
  });
};

exports.signout = async (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout success",
  });
};

exports.requireSignin = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.adminMiddleware = (req, res, next) => {
  const adminUserId = req.user._id;
  if(adminUserId === undefined){

    return User.findById({ _id: adminUserId }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "User not found",
        });
      }
  
      if (user.role !== 1) {
        return res.status(400).json({
          error: "Admin resource. Access denied",
        });
      }
  
      req.profile = user;
      next();
    });
  }
};
