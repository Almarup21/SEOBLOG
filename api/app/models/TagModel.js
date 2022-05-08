const mongoose = require("mongoose");

// //ternayata harus begini

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       trim: true,
//       required: true,
//       max: 32,
//       unique: true,
//       index: true,
//       lowercase: true,
//     },
//     name: {
//       type: String,
//       trim: true,
//       required: true,
//       max: 32,
//     },
//     email: {
//       type: String,
//       trim: true,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     profile: {
//       type: String,
//       required: true,
//     },
//     hashed_password: {
//       type: String,
//       required: true,
//     },
//     salt: String,
//     about: {
//       type: String,
//     },
//     role: {
//       type: Number,
//       default: 0,
//     },
//     photo: {
//       data: Buffer,
//       contentType: String,
//     },
//     resetPasswordLink: {
//       data: String,
//       default: "",
//     },
//   },
//   { timestamp: true }
// );

const Tag = mongoose.model(
  "tag",
  mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        lowercase: true,
      },
      slug: {
        type: String,
        unique: true,
        index: true,
      },
    },
    { timestamps: true }
  )
);

// User.schema.pre("password", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashed_password = await bcrypt.hash(this.password, salt);
//     this.password = hashed_password;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = Tag;
