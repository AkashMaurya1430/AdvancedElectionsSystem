const { sign, verify } = require("jsonwebtoken");

module.exports.isAuth = (req, res, next) => {
  const authorization = req.header("Authorization");
  let user = {};
  let response = { success: false, message: "" };
  let secret = process.env.JWT_SECRET;

  if (!authorization) {
    response.message = "Not authorized";
    return res.status(401).send(response);
  }
  // console.log(authorization,"Au");

  try {
    const token = authorization.split(" ")[1];
    verify(token, secret, function (err, decoded) {
      if (err) throw err;
      user = decoded;
    });
    req.user = user;
    // console.log(req.user,"User");
  } catch (err) {
    // console.log(err);
    response.message = "Not authenticated, Login to continue";
    return res.status(401).send(response);
  }
  return next();
};

module.exports.checkRole = (roles) => {
  return (req, res, next) => {
    console.log(req.user, "User");
  console.log(req.user.userId);

    let response = { success: false, message: "" };
    if (roles.includes(req.user.roleModel)) return next();
    response.message = "Oops , you cannot access this page";
    return res.status(401).send(response);
  };
};
