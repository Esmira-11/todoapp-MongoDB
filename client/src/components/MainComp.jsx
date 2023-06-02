import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterToDo,removeToDo,toggleTodo } from '../slices/todoSlices'
import axios from 'axios';

function MainComp() {

    let {todoReducer} = useSelector(state => state)
    let dispatch = useDispatch()

    console.log(todoReducer)

    const removeToDos = (id) => {
      console.log("yes")
        dispatch(removeToDo(id))
    }

    //delete todo
    const deleteItem = async(id) => {
      console.log(id)
      try{
        const res = await axios.delete(`http://localhost:3003/api/item/${id}`)
        const newListItem = todoReducer.filterTodos.filter(item=> item.id !== id)
        dispatch(removeToDo(newListItem))
      }
      catch(err){
        console.log(err)
      }
    }


    let markTodos = (index) => {
      const updatedTodos = todoReducer.filterTodos.map((todo, i) => (
        i === index ? { ...todo, status: !todo.status } : todo)
      );
      dispatch(toggleTodo(updatedTodos));
  
    };
   
    return (
        <>
        <div className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    todoReducer.filterTodos && todoReducer.filterTodos.map((item,index) => <li key={index} className={!item.status ? "completed" : ""}>
                        {/* completed */}
                            <div className="view">
                                <input 
                                  className={item.status ? "toggle" : "toggle-checked"} 
                                  type="checkbox" 
                                  onClick={() => markTodos(index)}
                                  />
                                <label>{item.todos}</label>
                                <button className="destroy" onClick={() => {removeToDos(item.id);deleteItem(item.id)}} />
                            </div>
                            
                        </li>)
                }
            </ul>
        </div>
    </>
  )
}

export default MainComp