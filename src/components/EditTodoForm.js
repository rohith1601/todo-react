import React, {useState} from 'react'

const EditToDoForm = ({editTodo, task}) => {
    const [value, setValue]=useState(task.title);
    const submitHandler = (e) => { 
        e.preventDefault()
        editTodo(value, task.id)
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={submitHandler}>
      <input type='text' placeholder='Update task' className='todo-input' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditToDoForm
