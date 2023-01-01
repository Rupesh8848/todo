const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is requried"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is requried"],
  },
  email: {
    type: String,
    required: [true, "Email Name is requried"],
  },
  password: {
    type: String,
    required: [true, "Password is requried"],
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationToken: String,
  activationTokenExpiry: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
