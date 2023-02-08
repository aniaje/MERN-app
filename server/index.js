const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");
const cors = require("cors");
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://ananhu7:passwordnhu7@cluster0.yhvohnw.mongodb.net/mern-app;"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/addUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user); //pass data from request  body (e.g form data) to NEW USER
  await newUser.save(); //save the data

  res.json(user); //send back response to the frontend
});

app.listen(3001, () => {
  console.log("server runs");
});
