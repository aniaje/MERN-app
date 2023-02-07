const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ananhu7:passwordnhu7@cluster0.yhvohnw.mongodb.net/test"
);

app.listen(3001, () => {
  console.log("server runs");
});
