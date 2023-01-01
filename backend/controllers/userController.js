const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const generateToken = require("../tokenGenereator");
const bcrypt = require("bcryptjs");

const postSignup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json("User already exists.");
  }
  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  const savedUser = await user.save();
  return res.send({
    userName: savedUser.fullName,
    email: savedUser.email,
    token: generateToken(savedUser._id),
  });
};

const postSignin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json("Please enter correct credentials.");
  const userValid = await bcrypt.compare(password, user.password);
  if (userValid) {
    const token = await generateToken(user._id);
    return res.status(200).json({
      userName: user.fullName,
      email: user.email,
      token,
    });
  } else {
    return res.json("User credentials invalid");
  }
};

module.exports = { postSignup, postSignin };
