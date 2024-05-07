import React, {useState} from 'react'
import ToDoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import EditToDoForm from './EditTodoForm';
uuidv4();

const ToDoWrapper = () => {
    const [todos, setTodos]=useState([]);
    const addTodo = todo =>{
        setTodos([...todos, {id:uuidv4(), title:todo, completed:false, isEditing:false}]);
        console.log(todo);
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deletetodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task, id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, title: task, isEditing: !todo.isEditing} : todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done !!</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo,index) =>(
        todo.isEditing?(
            <EditToDoForm key={index} task={todo} editTodo={editTask}/>
        ):(
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deletetodo={deletetodo} editTodo={editTodo}/>
        )
       
      ))}
    </div>
  )
}

export default ToDoWrapper