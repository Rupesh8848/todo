const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: [true, "Todo description is required."],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    todoContainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Container",
      required: [true, "Todo Container is required."],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required to add todo item."],
    },
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
