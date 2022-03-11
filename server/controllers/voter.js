const User = require("../models/User");
const Voter = require("../models/Voter");
const Slot = require("../models/Slots");
let path = require("path");
const fs = require("fs");

module.exports.editProfile = async (req, res) => {
  let response = { status: false, message: "" };
  const { name, contact, dob, about, profilePic } = req.body;

  const updatedVoter = {
    name,
    contact,
    dob,
    // about,
    profilePic,
  };

  const voterData = await Voter.findOne({ _id: req.user.role });

  if (req.file && req.file.originalname != "") {
    updatedVoter.profilePic =
      process.env.APP_DEV_URL + "/images/profilePic/" + req.file.filename;
  }

  await Voter.findOneAndUpdate({ _id: req.user.role }, updatedVoter, {
    new: true,
  })
    .then((result) => {
      if (result) {
        let imageName = voterData.profilePic.split("/");
        let imagepath =
          path.join(__dirname, "../public/images/profilePic/") +
          imageName[imageName.length - 1];
        // console.log(imagepath, "IMage");
        if (req.file && req.file.originalname != "") {
          fs.unlink(imagepath, (err) => {
            if (err) {
              response.status = false;
              response.errMessage = err;
              response.message = "Failed to update profile , please try again";
              return res.status(400).json(response);
            }
          });
        }
        response.status = true;
        response.message = "Profile Updated Successfully";
        res.status(200).send(response);
      } else {
        response.message = "Voter Not Found";
        res.status(200).send(response);
      }
    })
    .catch((e) => {
      //   console.log(e, "E");
      response.message = "Internal Server Error";
      response.errMessage = e;
      res.status(500).send(response);
    });

  //   console.log(updatedVoter, "U");
};

module.exports.getMyDetails = async (req, res) => {
  let response = { status: false, message: "" };

  await User.findById({ _id: req.user.userId })
    .populate("role")
    .select("-password")
    .then((result) => {
      // console.log(result);
      if (result) {
        response.status = true;
        response.message = "User Found";
        response.data = result;
        res.status(200).send(response);
      } else {
        response.message = "User not found";
        res.status(200).send(response);
      }
    })
    .catch((e) => {
      response.message = "Internal Server Error";
      response.errMessage = e;
      res.status(500).send(response);
    });
};

module.exports.bookSlot = async (req, res) => {
  let response = { status: true, message: "" };

  const { slotId } = req.body;

  let slot = await Slot.findById({ _id: slotId });

  console.log(req.user);

  // Check if slots are filled or not
  if (slot.bookedBy.length > slot.size) {
    response.message = "Slot Full";
    return res.status(200).send(response);
  }

  const voterData = await Voter.findById({ _id: req.user.role });

  // deleting previous slot booked
  if (voterData.bookedSlot) {
    await Slot.findByIdAndUpdate(
      { _id: voterData.bookedSlot },
      { $pull: { bookedBy: req.user.role } }
    );
  }
  // return;

  if (slot) {
    await Slot.findByIdAndUpdate(
      { _id: slotId },
      { $addToSet: { bookedBy: req.user.role } }
    )
      .then(async (result) => {
        // console.log(result);
        await Voter.findByIdAndUpdate(
          { _id: req.user.role },
          { $set: { bookedSlot: result._id } }
        );
        response.message = "Slot Booked Successfully";
        response.status = true;
        res.status(200).send(response);
      })
      .catch((err) => {
        response.message = "Failed to book slot";
        response.errMessage = err;
        res.status(500).send(response);
      });
  } else {
    response.message = "Slot not Found";
    res.status(200).send(response);
  }
};
