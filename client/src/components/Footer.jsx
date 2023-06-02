import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { empty,filterToDo, removeToDo } from '../slices/todoSlices'
import axios from 'axios';

function Footer() {

  let {todoReducer} = useSelector(state => state);
  const [active, setactive] = useState()
  const [completed, setcompleted] = useState()

  const removeToDos = () => {
    dispatch(empty())
  }
  let dispatch = useDispatch();

  let handleChange = (item) => {
    dispatch(filterToDo(item))
    item ==false?setactive(true):setactive(false)
    item ==true?setcompleted(true):setcompleted(false)
  }

  //get all todos
  useEffect(() => {
    const getItemList = async () => {
        try{
            const res = await axios.get('http://localhost:3003/api/items')
            dispatch(filterToDo(res.data))

          }
        catch(err){
            console.log(err)
        }
    }
    getItemList()
},[]);

  return (
    <>
    <div className="footer">
        <span className="todo-count">
            <strong>{todoReducer.filterTodos.filter(item => item.status === true).length}</strong>
            items left
        </span>
        <ul className="filters">
            <li>
            <a href="#/" className={(active==false &&  completed==false) || active==undefined  || completed==undefined ? "selected" : ""}  onClick={() => handleChange()}>
                All
            </a>
            </li>
            <li>
            <a href="#/" className={active ? "selected" : ""} onClick={() => handleChange(false)}>Active</a>
            </li>
            <li>
            <a href="#/" className={completed ? "selected" : ""} onClick={() => handleChange(true)}>Completed</a>
            </li>
        </ul>
        <button className="clear-completed" onClick={removeToDos}>Clear completed</button>
    </div>
       
    </>
  )
}

export default Footer