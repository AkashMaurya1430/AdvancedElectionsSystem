const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
  {
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
    isVerified: {
      type: Boolean,
      default: true,
      required: true,
    },
    electionAgendas: [
      {
        title: String,
        description: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);
