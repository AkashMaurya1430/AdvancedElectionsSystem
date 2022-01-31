const express = require("express");
const router = express.Router();
const commonController = require("../controllers/common");

router.get("/", (req, res) => {
  res.send("Hi");
});

router.post("/signup", commonController.signup);

router.post("/login", commonController.login);


module.exports = router;
