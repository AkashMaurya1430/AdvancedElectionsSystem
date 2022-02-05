const User = require("../models/User");
const Candidate = require("../models/Candidate");
const Voter = require("../models/Voter");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  let response = {
    status: false,
    message: "",
  };

  const { type, email, password } = req.body;
  try {
    if (!email) {
      response.message = "Please Enter Email";
      return res.status(200).send(response);
    } else if (!password) {
      response.message = "Please Enter Password";
      return res.status(200).send(response);
    } else if (!type) {
      response.message = "Please Select Type";
      return res.status(200).send(response);
    } else if (password.length < 8) {
      response.message = "Please Enter atleast 8 chars in password";
      return res.status(200).send(response);
    }

    const userFound = await User.findOne({ email });

    if (userFound) {
      response.message = "User Already Exists";
      return res.status(200).send(response);
    }

    bcrypt.genSalt(saltRounds, async function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        // console.log(hash);

        const user = new User({
          email,
          password: hash,
          roleModel: type,
        });

        // console.log(user);
        const userData = await user.save();

        let roleId;

        if (type === "Voter") {
          const voter = Voter({
            userId: userData._id,
          });

          const voterData = await voter.save();

          roleId = voterData._id;
        } else if (type === "Candidate") {
          const candidate = Candidate({
            userId: userData._id,
          });

          const candidateData = await candidate.save();
          roleId = candidateData._id;
        }

        await User.findOneAndUpdate({ _id: userData._id }, { role: roleId })
          .then((result) => {
            var token = jwt.sign({ userId: result._id, email: result.email, roleModel: result.roleModel, role: roleId }, process.env.JWT_SECRET);
            response.data = {
              token,
            };
            response.status = true;
            response.message = "User Signed up successfully";
            res.status(201).send(response);
          })
          .catch((error) => {
            response.errMessage = error;
            response.message = "Failed to sign up";
            res.status(20).send(response);
          });
      });
    });
  } catch (error) {
    response.message = "Server Error";
    response.errMessage = error;
    res.status(500).send(response);
  }
};

module.exports.login = async (req, res) => {
  let response = {
    status: false,
    message: "",
  };

  const { email, password } = req.body;

  try {
    if (!email) {
      response.message = "Please Enter Email";
      return res.status(200).send(response);
    } else if (!password) {
      response.message = "Please Enter Password";
      return res.status(200).send(response);
    }

    await User.findOne({ email }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          response.status = true;
          var token = jwt.sign({ userId: user._id, email: user.email, roleModel: user.roleModel, role: user.role }, process.env.JWT_SECRET);
          response.data = {
            role: user.roleModel,
            token,
          };
          response.message = "User logged in";
          return res.status(200).send(response);
        } else {
          response.message = "Incorrect password";
          return res.status(200).send(response);
        }
      } else {
        response.message = "User not found";
        return res.status(200).send(response);
      }
    });
  } catch (error) {
    response.message = "Server Error";
    response.errMessage = error;
    res.status(500).send(response);
  }
};
