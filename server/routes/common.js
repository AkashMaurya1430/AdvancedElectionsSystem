const express = require("express");
const router = express.Router();
const commonController = require("../controllers/common");
const security = require("../middlewares/security");

router.get("/", (req, res) => {
  res.send("Hi");
});

router.post("/signup", commonController.signup);

router.post("/login", commonController.login);

router.get("/candidates",security.isAuth,security.checkRole(["Voter","Candidate","Admin"]),commonController.getCandidates)

module.exports = router;
