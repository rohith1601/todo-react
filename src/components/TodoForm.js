import React, {useState} from 'react'

const ToDoForm = ({addTodo}) => {
    const [value, setValue]=useState("");
    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={submitHandler}>
      <input type='text' placeholder='Add a new task' className='todo-input' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm
