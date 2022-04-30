const multer = require("multer");
const fs = require("fs");


const setDestination = (destination) => {
  return (req, res, next) => {
    req.destination = destination;
    next();
  };
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = req.destination;
    const exist = fs.existsSync(dir);
    if (!exist) {
      return fs.mkdir(dir, (error) => cb(error, dir));
    }
    return cb(null, dir);
  },
  // let filetype = file.mimetype.split("/")[1]
  filename: (req, file, cb) => {
    return cb(
      null,
      `${new Date().getTime()}${file.originalname.split(" ").join("-")}`
    );
  },
});

const voterImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = req.destination;
    const exist = fs.existsSync(dir);
    if (!exist) {
      return fs.mkdir(dir, (error) => cb(error, dir));
    }
    return cb(null, dir);
  },
  // let filetype = file.mimetype.split("/")[1]
  filename: (req, file, cb) => {
    return cb(
      null,
      "webImage"
    );
  },
});

const upload = multer({
  storage: storage,
});

const uploadVoterImage = multer({
  storage: voterImageStorage,
});

exports.upload = upload;
exports.uploadVoterImage = uploadVoterImage;
exports.setDestination = setDestination;