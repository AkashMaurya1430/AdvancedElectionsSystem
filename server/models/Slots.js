const mongoose = require("mongoose");

const slotSchema = mongoose.Schema(
  {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    bookedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voter",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slot", slotSchema);
