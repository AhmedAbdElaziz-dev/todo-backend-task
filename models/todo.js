const mongoose = require("mongoose");
const todo = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", todo);

module.exports = Todo;
