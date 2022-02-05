const Voter = require("../models/Voter");
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

  if (req.file.originalname != "") {
    updatedVoter.profilePic = process.env.APP_DEV_URL + "/images/profilePic/" + req.file.filename;
  }

  await Voter.findOneAndUpdate({ _id: req.user.role }, updatedVoter, { new: true })
    .then((result) => {
      if (result) {
 
        let imageName = voterData.profilePic.split("/");
        let imagepath = path.join(__dirname, "../public/images/profilePic/") + imageName[imageName.length - 1];
        console.log(imagepath, "IMage");
        fs.unlink(imagepath, (err) => {
          if (err) {
            response.status = false;
            response.errMessage = err;
            response.message = "Failed to update profile , please try again";
            return res.status(400).json(response);
          } 
        });
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
