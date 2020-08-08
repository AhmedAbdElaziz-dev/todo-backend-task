const mongoose = require("mongoose");
const _ = require("lodash");
const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
    },
  },
  {
    toJSON: {
      transform: (doc) => {
        return _.pick(doc, ["id", "name","isDone"]);
      },
    },
  }
);

const ToDo = mongoose.model("ToDo", messageSchema);

module.exports = ToDo;
