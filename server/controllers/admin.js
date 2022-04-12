const Candidate = require("../models/Candidate");
const Voter = require("../models/Voter");
const Vote = require("../models/Vote");
const User = require("../models/User");
const Slot = require("../models/Slots");
const bcrypt = require("bcrypt");

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

module.exports.getAllVoters = async (req, res) => {
  let response = { status: false, message: "", data: {} };

  await Voter.find({isVerified:false})
    .then((voters) => {
      console.log(voters);
      if (voters.length) {
        response.status = true;
        response.message = "voters Found";
        response.data.voters = voters;
        res.status(200).send(response);
      } else {
        response.message = "No voters Found";
        res.status(200).send(response);
      }
    })
    .catch((err) => {
      response.message = "Failed to Fetch Voters";
      response.errMessage = err;
      res.status(500).send(response);
    });
};

module.exports.getAllCandidates = async (req, res) => {
  let response = { status: false, message: "", data: {} };

  await Candidate.find({isVerified:false})
    .then((candidates) => {
      if (candidates.length) {
        response.status = true;
        response.message = "Candidates Found";
        response.data.candidates = candidates;
        res.status(200).send(response);
      } else {
        response.message = "No Candidates Found";
        res.status(200).send(response);
      }
    })
    .catch((err) => {
      response.message = "Failed to Fetch Candidates";
      response.errMessage = err;
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

// For casting vote
module.exports.getVoterData = async (req, res) => {
  let response = { status: false, message: "", data: {} };

  const { email, password } = req.body;
  try {
    if (!email) {
      response.message = "Please Enter Email";
      return res.status(200).send(response);
    } else if (!password) {
      response.message = "Please Enter Password";
      return res.status(200).send(response);
    }

    // Check if he has already casted his vote
    let voteCasted = await Vote.findOne({ "userId.email": email });

    if (voteCasted) {
      response.message = "Voter has already casted the vote";
      return res.status(200).send(response);
    }

    await User.findOne({ email })
      .populate("role")
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            if (user.roleModel === "Voter") {
              response.status = true;
              user.password = "";
              response.data = {
                user,
              };
              response.message = "Voter Found";
              return res.status(200).send(response);
            } else {
              response.message = "Please login with a Voter Account";
              return res.status(200).send(response);
            }
          } else {
            response.message = "Incorrect password";
            return res.status(200).send(response);
          }
        } else {
          response.message = "Voter not found";
          return res.status(200).send(response);
        }
      });
  } catch (error) {
    console.log(error);
    response.message = "Server Error";
    response.errMessage = error;
    res.status(500).send(response);
  }
};

module.exports.getCandidates = async (req, res) => {
  let response = { status: false, message: "", data: {} };

  await Candidate.find({ isVerified: true })
    .then((candidates) => {
      // console.log(candidates);
      if (candidates.length) {
        response.status = true;
        response.message = "Candidates Found";
        response.data.candidates = candidates;
        res.status(200).send(response);
      } else {
        response.message = "No Candidates Found";
        res.status(200).send(response);
      }
    })
    .catch((err) => {
      response.message = "Failed to Fetch Candidates";
      response.errMessage = err;
      res.status(500).send(response);
    });
};

module.exports.voteCandidate = async (req, res) => {
  let response = { status: false, message: "" };

  const { candidateId, voterId } = req.body;

  try {
    let candidateData = await Candidate.findOne({
      _id: candidateId,
      isVerified: true,
    });

    if (!candidateData) {
      response.message = "Candidate Not Found";
      return res.status(200).send(response);
    }

    let voterData = await Voter.findOne({ _id: voterId });

    if (!voterData) {
      response.message = "Voter Not Found";
      return res.status(200).send(response);
    }

    // Check if he has already casted his vote
    let voteCasted = await Vote.findOne({ voterId });

    if (voteCasted) {
      response.message = "Voter has already casted the vote";
      return res.status(200).send(response);
    }

    // Create a new vote
    let newVote = new Vote({
      voterId: voterData._id,
      candidateId: candidateData._id,
    });

    await newVote.save();

    response.status = true;
    response.message = "Vote Casted Successfully";
    res.status(201).send(response);
  } catch (err) {
    response.errMessage = err;
    response.message = "Failed to cast vote";
    res.status(200).send(response);
  }
};
