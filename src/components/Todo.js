import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deletetodo, editTodo}) => {
  return (
    <div className="Todo" >
        <p className={`${task.completed ? 'completed': 'incompleted'}`}>{task.title}</p>
        <div>
        <FontAwesomeIcon  icon={faPenToSquare} onClick={()=> editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={()=> deletetodo(task.id)} />
        </div>
    </div>
  )
}