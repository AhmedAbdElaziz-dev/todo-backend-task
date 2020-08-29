const express = require("express");
const toDoRoute = require("./routes/todo");
require("express-async-errors");
require("dotenv").config();
require("./db");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/todo", toDoRoute);
app.use((req, res, next) => {
  res.json({
    "request url": req.url,
    method: req.method,
    "current time": Date.now(),
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    meesage: err.message,
    type: err.type,
    details: err.details,
  });
});

app.listen(port, () => console.log(`running at port ${port}`));
