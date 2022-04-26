const express = require("express");
const app = express();
const userModel = require("./Models/User");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");


app.use(bodyParser.json([]));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", async (req, res, next) => {
  try {
    res.render("home");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/user", async (req, res, next) => {
  try {
    let userDetail = req.body;
    console.log(userDetail);
    let response = await userModel.insertMany([userDetail]);
    res.json(response);
  } catch (error) {
    res.json(response);
  }
});

app.get("/user", async (req, res) => {
  try {
    let response = await userModel.find({});
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

// app.get("/user/:userId", async (req, res) => {
//   let userId = req.params.userId;
//   let response = await userModel.find({ _id: userId });
//   res.json(response);
// });

// app.put("/user/:userId", async (req, res) => {
//   let userId = req.params.userId;
//   let body = req.body;
//   console.log(body, userId);
//   let response = await userModel.updateOne({ _id: userId }, { $set: body });
//   res.json(response);
// });

// app.delete("/user/:userId", async (req, res) => {
//   let userId = req.params.userId;
//   let response = await userModel.deleteOne({ _id: userId });
//   res.json(response);
// });

module.exports = app;
