const express = require("express");
const router = express.Router();

const candidateController = require("../controllers/candidate");
const { upload, setDestination } = require("../middlewares/imageHandler");
const validate = require("../middlewares/validate");
const security = require("../middlewares/security");

router.post(
  "/editProfile",
  security.isAuth,
  security.checkRole(["Candidate"]),
  validate,
  setDestination("./public/images/profilePic/"),
  upload.single("profilePic"),
  candidateController.editProfile
);

router.get(
  "/mydetails",
  security.isAuth,
  security.checkRole(["Candidate"]),
  candidateController.getMyDetails
);

router.post(
  "/addCampaign",
  security.isAuth,
  security.checkRole(["Candidate"]),
  validate,
  setDestination("./public/images/campaigns/"),
  upload.single("image"),
  candidateController.addCampaign
);

router.get(
  "/mycampaigns",
  security.isAuth,
  security.checkRole(["Candidate"]),
  candidateController.getMyCampaigns
);

router.post(
  "/deleteCampaign",
  security.isAuth,
  security.checkRole(["Candidate"]),
  candidateController.deleteCampaign
);

module.exports = router;
