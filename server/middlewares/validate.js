const fs = require("fs");

module.exports = (req, res, next) => {
  let response = { success: false, message: "" };

  if (req.file) {
    if (
      !req.file.mimetype.includes("jpeg") &&
      !req.file.mimetype.includes("png") &&
      !req.file.mimetype.includes("jpg")
    ) {
      fs.unlinkSync(req.file.path);
      response.message = "Please provide image with appropriate file type"; // msg
      return res.status(400).json(response);
    }

    // file max size would be 1mb
    if (req.file.size > 1024 * 1024) {
      fs.unlinkSync(req.file.path);
      response.message = "Please provide image with less than 1Mb ";
      return res.status(400).json(response);
    }
  }

  next();
};