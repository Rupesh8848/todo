const mongoose = require("mongoose");

const todoContainerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title of the container is required."],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const todoContainerModel = mongoose.model("Container", todoContainerSchema);
module.exports = todoContainerModel;
