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

const deleteContainer = async (req, res) => {
  const { id } = req.params;
  const container = await Container.findById(id);
  console.log(container);
  if (!container) {
    return res.json("Cotainer doesn't exists");
  }
  if (req?.user?.id == container?.user) {
    try {
      const response = await Container.findByIdAndDelete(id);
      return res.json(response.data);
    } catch (error) {
      return res.json(error);
    }
  } else {
    return res.json("User not authorized.");
  }
};

module.exports = { createContainer, getContainerTitles, deleteContainer };
