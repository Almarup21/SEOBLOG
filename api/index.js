// setup
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("../api/config/db");

const app = express();
const port = process.env.PORT || 8000;

// middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// route

app.get("/", (req, res) => {
  res.json({ time: Date().toString() });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
