const Container = require("../model/todoContainerModel");
const User = require("../model/userModel");

const createContainer = async (req, res) => {
  const { title } = req.body;
  console.log(req.user._id);
  try {
    const container = new Container({
      title,
      user: req.user._id,
    });
    const savedContainer = await container.save();
    return res.status(200).json(savedContainer);
  } catch (error) {
    return res.json(error);
  }
};

const getContainerTitles = async (req, res) => {
  try {
    // const response = await User.findById(req.user._id).populate("containers");
    const response = await Container.find({ user: req.user._id }).sort(
      "-createdAt"
    );
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = { createContainer, getContainerTitles };
