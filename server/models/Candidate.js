const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
  },
  contact: {
    type: Number,
  },
  profilePic: {
    type: String,
  },
  dob: {
    type: Date,
  },
  highestEducation: {
    type: String,
  },
  about: {
    type: String,
  },
  socials: {
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  electionAgendas: [
    {
      title: String,
      description: String,
    },
  ],
});

module.exports = mongoose.model("Candidate", candidateSchema);
