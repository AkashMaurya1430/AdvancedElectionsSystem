// Middleware
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const spawn = require("child_process").spawn;

const initMiddleware = (app) => {
  const webCamImage = "./public/webCamImage/webImage.jpg"
  const voterDbImage = "./public/images/profilePic/1644085742476img-(32).jpg"
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: false, limit: "1mb" }));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(logger("dev"));
  app.use(cors());

  var process = spawn("python", [
    "facialRecognition.py",
    webCamImage,
    webCamImage,
  ]);

  // Takes stdout data from script which executed
  // with arguments and send this data to res object
  process.stdout.on("data", function (data) {
    console.log(data.toString());
  });
};


module.exports = initMiddleware;
