import React from 'react'

const Todo = props => {

  const handleClick = () => {
    props.handleToggleTask(props.todo.id)
  }

return(
    <p onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>{props.todo.item}</p>
)
}

export default Todo