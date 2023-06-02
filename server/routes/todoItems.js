const router = require('express').Router()
const todoItemsModel = require('../models/todoItems')


router.post('/api/item', async (req,res)=>{
    try{
        const newTodo = new todoItemsModel({
            item: req.body.item
        })

        const saveTodo = await newTodo.save()
        res.status(200).json("New Todo Added")
    }
    catch(err){
        res.json(err);
    }
})

// get all todos
router.get('/api/items', async(req,res)=>{
    try{
        const allTodos = await todoItemsModel.find({});
        res.status(200).json(allTodos);
    }
    catch(err){
        res.json(err);
    }
})

//delete todo by id
router.delete('/api/item/:id',async(req,res)=>{
    let id = req.params.id
    try{
        const deleteTodo = await todoItemsModel.findByIdAndDelete(id);
        res.status(200).json('Todo Deleted')
    }
    catch(err){
        res.json(err)
    }
})

//update todo
router.put('/api/item/:id', async(req,res) => {
    let id = req.params.id
    try{
        const updateTodo =  await todoItemsModel.findByIdAndUpdate(id, {$set:req.body});
        res.status(200).json("Todo Updated");
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router;