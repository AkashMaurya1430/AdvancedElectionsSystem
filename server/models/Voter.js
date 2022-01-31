const mongoose = require("mongoose");

const voterSchema = mongoose.Schema(
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
    highestEdu: {
      type: String,
    },
    about: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Voter", voterSchema);