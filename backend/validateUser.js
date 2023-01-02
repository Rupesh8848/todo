const jwt = require("jsonwebtoken");
const User = require("./model/userModel");
const validateUser = async (req, res, next) => {
  const { authorization } = req.headers;
  const userToken = authorization.split(" ")[1];
  if (authorization.split(" ")[0] !== "Bearer") {
    return res.json("Bearer token missing.");
  }

  const userId = jwt.decode(userToken);
  const user = await User.findById(userId.id);
  req.user = user;
  next();
};

module.exports = validateUser;
