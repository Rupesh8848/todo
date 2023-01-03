const jwt = require("jsonwebtoken");
const User = require("./model/userModel");
const validateUser = async (req, res, next) => {
  const { authorization } = req.headers;
  const userToken = authorization?.split(" ")[1];
  if (!userToken) {
    return res.json("User Token Couldn't be found");
  }
  if (authorization.split(" ")[0] !== "Bearer") {
    return res.json("Bearer token missing.");
  }

  try {
    const userId = await jwt.decode(userToken);

    const user = await User.findById(userId.id);
    req.user = user;
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = validateUser;
