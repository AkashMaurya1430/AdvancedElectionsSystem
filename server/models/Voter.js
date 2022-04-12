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
    // highestEdu: {
    //   type: String,
    // },
    about: {
      type: String,
    },
    bookedSlot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Slot",
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: true,

    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Voter", voterSchema);
