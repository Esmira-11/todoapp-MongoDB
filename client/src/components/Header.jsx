import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../slices/todoSlices';
import axios from 'axios'

function Header() {

    const [todos, settodos] = useState('')
    let { todoReducer } = useSelector(state => state);

    let dispatch = useDispatch();

    const add = (e) => {
        e.preventDefault()
        let newTodo = {
            id: Math.floor(Math.random() * 1000),
            todos: todos,
            status: true
            //true is active
        }
        dispatch(addToDo(newTodo))
        settodos('')
    }

    const addItem = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:3003/api/item', {item: todos})
            console.log(res)
            settodos('')

        }
        catch(err){
            console.log(err)
        }
    }


return (
    <>
    <div className="header">
        <form onSubmit={(e)=>{add(e);addItem(e)}}>
            <input
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus=""
            onChange={(e) => settodos(e.target.value)}
            />
        </form>
    </div>
    <h1>Todos</h1>
    </>
  )
}

export default Header