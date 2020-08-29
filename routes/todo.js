const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
require("express-async-errors");

module.exports = router;

router.get("/", async (req, res, next) => {
  const itemsList = await Todo.find();
  res.status(200).json(itemsList);
});

router.post("/add", async (req, res, next) => {
  const { body } = req.body;
  isDone = false;
  const todo = new Todo({ body, isDone });
  await todo.save();
  res.json(todo);
});

router.patch("/:id", async (req, res, next) => {
  id = req.params.id;
  const { body, isDone } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    id,
    {
      $set: { body, isDone },
    },
    {
      new: true,
      runValidators: true,
      omitUndefined: true,
    }
  );
  res.status(200).json(todo);
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  const todo = await Todo.findByIdAndDelete(id);
  res.status(200).json(todo);
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  res.status(200).json(todo);
});
