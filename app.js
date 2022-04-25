const express = require("express");
const app = express();
const userModel = require("./user");
const bodyParser = require("body-parser");

app.use(bodyParser.json([]));

app.post("/user", async (req, res, next) => {
  try {
    let userDetail = req.body;
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

app.get("/user/:userId", async (req, res) => {
  let userId = req.params.userId;
  let response = await userModel.find({ _id: userId });
  res.json(response);
});


module.exports = app;
