const express = require("express");
const router = express.Router();
const voterController = require("../controllers/voter");
const { upload, setDestination } = require("../middlewares/imageHandler");
const validate = require("../middlewares/validate");
const security = require("../middlewares/security")

router.post(
  "/editProfile",
  security.isAuth,
  security.checkRole(["Voter"]),
  validate,
  setDestination("./public/images/profilePic/"),
  upload.single("profilePic"),
  voterController.editProfile
);

module.exports = router;