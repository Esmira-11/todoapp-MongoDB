const express = require('express');
const todoItemsModel = require('./models/todoItems')
const todoItemRoute = require('./routes/todoItems')
const router = require('express').Router()
const { default: mongoose } = require("mongoose");
const { Schema } = mongoose
// const dotenv = require('dotenv').config();
const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://esmiraai:MDoJwTK5mpDZljZe@cluster0.3kppsbd.mongodb.net/todoapp')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', todoItemRoute);







app.listen(3003, () =>console.log("Server connected"))