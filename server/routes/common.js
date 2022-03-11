const express = require("express");
const router = express.Router();
const commonController = require("../controllers/common");
const security = require("../middlewares/security");

router.get("/", (req, res) => {
  res.send("Hi");
});

router.post("/signup", commonController.signup);

router.post("/login", commonController.login);

router.get(
  "/candidates",
  security.isAuth,
  security.checkRole(["Voter", "Candidate", "Admin"]),
  commonController.getCandidates
);

router.get(
  "/campaigns",
  security.isAuth,
  security.checkRole(["Voter", "Candidate", "Admin"]),
  commonController.getAllCampaigns
);

router.get(
  "/campaign/:id",
  security.isAuth,
  security.checkRole(["Voter", "Candidate", "Admin"]),
  commonController.getCampaignData
);

router.get(
  "/candidates",
  security.isAuth,
  security.checkRole(["Voter", "Candidate", "Admin"]),
  commonController.getCandidates
);

router.get("/slots",security.isAuth,security.checkRole(["Voter", "Candidate", "Admin"]),commonController.getSlots)



module.exports = router;
