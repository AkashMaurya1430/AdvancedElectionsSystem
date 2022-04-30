const express = require("express");
const security = require("../middlewares/security");
const router = express.Router();
const adminController = require("../controllers/admin");
const { upload, setDestination,uploadVoterImage } = require("../middlewares/imageHandler");
const validate = require("../middlewares/validate");

router.get("/", (req, res) => {
  res.send("Hi");
});

// For User Verification

router.get(
  "/getAllVoters",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.getAllVoters
);

router.get(
  "/getAllCandidates",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.getAllCandidates
);

router.post(
  "/createSlot",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.createSlot
);

router.post(
  "/approveCandidate",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.approveCandidate
);

router.post(
  "/approveVoter",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.approveVoter
);

router.post(
  "/getVoterData",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.getVoterData
);

// For Voting
router.get(
  "/getCandidates",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.getCandidates
);

router.post(
  "/castVote",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.voteCandidate
);

router.get(
  "/votes",
  security.isAuth,
  security.checkRole(["Admin"]),
  adminController.getVotes
);

router.post(
  "/compareVoterImage",
  security.isAuth,
  security.checkRole(["Admin"]),
  validate,
  setDestination("./public/webCamImage/"),
  upload.single("voterImage"),
  adminController.compareVoterImage
);

module.exports = router;
