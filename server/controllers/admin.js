const Candidate = require("../models/Candidate");
const Voter = require("../models/Voter");
const Slot = require("../models/Slots");

module.exports.createSlot = async (req, res) => {
  let response = { status: false, message: "" };
  const { startTime, endTime, size } = req.body;

  console.log(startTime, endTime, size);

  const newSlot = new Slot({
    startTime,
    endTime,
    size,
  });

  await newSlot
    .save()
    .then((result) => {
      if (result) {
        response.status = true;
        response.message = "Slot Saved";
        res.status(201).send(response);
      } else {
        response.message = "Failed to save slot";
        res.status(200).send(response);
      }
    })
    .catch((e) => {
      response.message = "Internal server error";
      response.errMessage = e;
      res.status(500).send(response);
    });
};

module.exports.approveCandidate = async (req, res) => {
  let response = { status: false, message: "" };

  const { candidateId } = req.body;

  await Candidate.findByIdAndUpdate(
    { _id: candidateId },
    { $set: { isVerified: true } }
  )
    .then((result) => {
      if (result) {
        response.status = true;
        response.message = "Candidate Verified Successfully";
        res.status(200).send(response);
      } else {
        response.message = "Candidate not found";
        res.status(200).send(response);
      }
    })
    .catch((e) => {
      response.message = "Internal Server Error";
      response.errMessage = e;
      res.status(500).send(response);
    });
};

module.exports.approveVoter = async (req, res) => {
  let response = { status: false, message: "" };

  const { voterId } = req.body;

  await Voter.findByIdAndUpdate(
    { _id: voterId },
    { $set: { isVerified: true } }
  )
    .then((result) => {
      if (result) {
        response.status = true;
        response.message = "Voter Verified Successfully";
        res.status(200).send(response);
      } else {
        response.message = "Voter not found";
        res.status(200).send(response);
      }
    })
    .catch((e) => {
      response.message = "Internal Server Error";
      response.errMessage = e;
      res.status(500).send(response);
    });
};