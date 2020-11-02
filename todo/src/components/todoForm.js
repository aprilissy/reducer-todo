import React, { useReducer, useState } from 'react'
import {addToList, reducer, initialState, toggleCompleted} from './../reducers/reducer'
import ToDoList from './todoList'


const TodoForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [item, setItem] = useState('')
  
  const handleChange = e => {
    setItem(e.target.value)
  }

  const addItem = e => {
    e.preventDefault()
    dispatch(addToList({
      item,
      completed: false,
      id: Date.now()
    }))
  }

  const handleTaskClick = (id) => {
    dispatch(toggleCompleted(id))
  }
  
  console.log('list',state.list);
  

  return(
    <div> 
      <form>
        <input 
          className='newTodo'
          name='todo'
          type='text'
          value={item}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add Todo</button>
      </form>
      <button
        // onClick={jkldsfj}
      >
        Clear Completed</button>
      <ToDoList todoList={state.list} handleToggleTask={handleTaskClick}/>
    </div>
  )
}

export default TodoForm