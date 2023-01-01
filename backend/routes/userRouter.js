const express = require("express");
const { postSignup, postSignin } = require("../controllers/userController");
const userRouter = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const signUpSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

userRouter.post("/signup", validator.body(signUpSchema), postSignup);
userRouter.post("/signin", validator.body(signinSchema), postSignin);

module.exports = userRouter;
