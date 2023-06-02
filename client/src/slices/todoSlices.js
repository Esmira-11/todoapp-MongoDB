// const { createSlice } = require("@reduxjs/toolkit");
import {createSlice} from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        filterTodos: []
    },
    reducers: {
        addToDo: (state, action) => {
          state.todos.push(action.payload)
          state.filterTodos = state.todos
        },
        removeToDo: (state,action) => {
            state.filterTodos = state.filterTodos.filter(q => q.id != action.payload)
            state.todos = state.filterTodos
            console.log('yesss')
        },
        empty: (state) => {
            state.filterTodos = []
        },
        toggleTodo:(state ,action) => {
            state.filterTodos =action.payload
            state.todos =action.payload
        },
        filterToDo: (state,action) => {
            action.payload != undefined ?
            state.filterTodos = state.todos.filter(q => q.status != action.payload)
             :
             state.filterTodos=state.todos

        },
    }
})

export const {addToDo, removeToDo, empty, toggleTodo, filterToDo} = todoSlice.actions

export default todoSlice.reducer