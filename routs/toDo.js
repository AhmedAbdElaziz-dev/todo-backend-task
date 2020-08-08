const express = require('express');
const router = express.Router();
const ToDo = require('../model/toDo');
require('express-async-errors');

module.exports = router;

router.get("/", async (req, res, next) => {
    const toDoList = await ToDo.find();
    res.status(200).json(toDoList);
});

router.post('/addToDO', async (req, res, next) => {
    const {name} = req.body;
    isDone=false;
    const Todo = new ToDo({name,isDone});
    await Todo.save();
    res.json(Todo)
})
router.patch('/:id', 
 async (req, res, next) => {
        id = req.params.id;
    const {name,isDone} = req.body;
    const toDo = await ToDo.findByIdAndUpdate(id,
    {
        $set: {name,isDone}
    }, {
        new: true,
        runValidators: true,
        omitUndefined: true
    });
    console.log(toDo);
    res.status(200).json(toDo)
})

router.delete('/:id', async (req, res, next) => {
    const id= req.params.id;
    const toDo = await ToDo.findByIdAndDelete(id);
    res.status(200).json(toDo)
})
router.get('/:id',async(req,res,next)=>{
    const id = req.params.id;
    const toDo = await ToDo.findById(id);
    res.status(200).json(toDo);
})