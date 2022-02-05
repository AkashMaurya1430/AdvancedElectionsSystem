// Middleware
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const path = require("path");
const cors = require('cors')

const initMiddleware = (app) => {
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: false, limit: "1mb" }));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(logger("dev"));
  app.use(cors())
};

module.exports = initMiddleware;
