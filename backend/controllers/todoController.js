const Todo = require("../model/todoModel");

const getTodos = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Todo.find({
      todoContainer: id,
      user: req.user._id,
    }).sort("-createdAt");
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
};

const addTodo = async (req, res) => {
  const { description, containerId } = req.body;
  console.log(req.user);
  try {
    const response = await Todo.create({
      todo: description,
      todoContainer: containerId,
      user: req?.user?._id,
    });
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Todo.findByIdAndDelete(id);
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = { getTodos, addTodo, deleteTodo };
