const Slot = require("../models/Slots");

module.exports.createSlot = async (req, res) => {
  console.log(1);
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

