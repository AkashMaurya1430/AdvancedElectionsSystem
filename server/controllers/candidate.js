const User = require("../models/User");
const Candidate = require("../models/Candidate");
let path = require("path");
const fs = require("fs");
const Campaign = require("../models/Campaign");

module.exports.getMyDetails = async (req, res) => {
  let response = { status: false, message: "" };
  await User.findOne({ _id: req.user.userId })
    .populate("role")
    .select("-password")
    .then((result) => {
      console.log(result);
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
      console.log(e);
      response.message = "Internal Server Error";
      response.errMessage = e;
      res.status(500).send(response);
    });
};

module.exports.editProfile = async (req, res) => {
  let response = { status: false, message: "" };
  let {
    name,
    contact,
    dob,
    about,
    profilePic,
    twitter,
    instagram,
    facebook,
    highestEducation,
    agendas,
  } = req.body;

  if (agendas) {
    agendas = JSON.parse(agendas);
  }
  const updatedCandidate = {
    name,
    contact,
    dob,
    about,
    profilePic,
    highestEducation,
    socials: {
      twitter,
      instagram,
      facebook,
    },
    electionAgendas: agendas ? agendas : [],
  };

  // return console.log(updatedCandidate);
  const candidateData = await Candidate.findOne({ _id: req.user.role });

  if (req.file && req.file.originalname != "") {
    updatedCandidate.profilePic =
      process.env.APP_DEV_URL + "/images/profilePic/" + req.file.filename;
  }

  await Candidate.findOneAndUpdate({ _id: req.user.role }, updatedCandidate, {
    new: true,
  })
    .then((result) => {
      if (result) {
        if (candidateData.profilePic) {
          let imageName = candidateData.profilePic.split("/");
          let imagepath =
            path.join(__dirname, "../public/images/profilePic/") +
            imageName[imageName.length - 1];
          // console.log(imagepath, "IMage");
          if (req.file && req.file.originalname != "") {
            fs.unlink(imagepath, (err) => {
              if (err) {
                response.status = false;
                response.errMessage = err;
                response.message =
                  "Failed to update profile , please try again";
                return res.status(400).json(response);
              }
            });
          }
        }
        response.status = true;
        response.message = "Profile Updated Successfully";
        res.status(200).send(response);
      } else {
        response.message = "Candidate Not Found";
        res.status(200).send(response);
      }
    })
    .catch((e) => {
      console.log(e, "E");
      response.message = "Internal Server Error";
      response.errMessage = e;
      res.status(500).send(response);
    });

  //   console.log(updatedVoter, "U");
};

module.exports.addCampaign = async (req, res) => {
  let response = { status: false, message: "" };
  let { title, body } = req.body;

  // console.log(req.file);

  let newCampaign = new Campaign({
    title,
    body,
    createdBy: req.user.role,
  });

  if (req.file && req.file.originalname != "") {
    newCampaign.image =
      process.env.APP_DEV_URL + "/images/campaigns/" + req.file.filename;
  }

  await newCampaign.save().then((result) => {
    if (result) {
      response.status = true;
      response.message = "Campaign Added Successfully";
      res.status(201).send(response);
    } else {
      response.message = "Failed to add Campaign";
      res.status(201).send(response);
    }
  });
};

module.exports.getMyCampaigns = async (req, res) => {
  let response = { status: false, message: "", data: {} };

  let myCampaigns = await Campaign.find({ createdBy: req.user.role });

  // console.log(myCampaigns);

  if (myCampaigns.length) {
    response.status = true;
    response.message = "Campaigns Found";
    response.data.campaigns = myCampaigns;
    return res.status(200).send(response);
  } else {
    response.status = true;
    response.message = "Campaigns Not Found";
    response.data.campaigns = myCampaigns;
    return res.status(200).send(response);
  }
};

module.exports.deleteCampaign = async(req,res)=>{
  let response = {status:false,message:""}

  let campaignData = await Campaign.findOne({_id:req.body.campaignId})

  
  if(campaignData.createdBy !=  req.user.role){
    response.message = "Not Authorized"
    return res.status(200).send(response)
  }

  console.log(campaignData,req.user.role);

  await Campaign.findOneAndDelete({_id:req.body.campaignId}).then((result)=>{
    if(result){
      response.status = true
      response.message = "Campaign Deleted Successfully"
      res.status(200).send(response)
    } else{
      response.status = false
      response.message = "Failed to deleted campaign"
      res.status(200).send(response)
    }
  })

}