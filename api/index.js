// setup
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("../api/config/db");
const authRouter = require("./app/routes/auth");
const userRouter = require("./app/routes/user");
const categoryRouter = require("./app/routes/category");
const tagRouter = require("./app/routes/tag");

const app = express();
const port = process.env.PORT || 8000;

// cors
app.use(Cors());
// if (process.env.NODE_ENV === "development") {
//   app.use(Cors({ origin: `${process.env.CLIENT_URL}` }));
// }

app.use(express.json());

// middlewares
app.use(authRouter);
app.use(userRouter);
app.use(categoryRouter);
app.use(tagRouter);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// route

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
