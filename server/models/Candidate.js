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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6428c0f4517b5df3c867f2710b6c887627488f87
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
