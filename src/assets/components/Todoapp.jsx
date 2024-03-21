import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTodo,deleteTodo} from '../../Slices/todoSlices';
function Todoapp() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
  
    const handleInputChange = e => {
      setInputValue(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        dispatch(
          addTodo({
            id: Date.now(),
            text: inputValue,
            completed: false,
          })
        );
        setInputValue('');
      }
    };
  
    const handleToggleComplete = id => {
      dispatch(toggleComplete(id));
    };
  
    const handleDeleteTodo = id => {
      dispatch(deleteTodo(id));
    };
  
  return (
    <div>
     <h1 style={{margin:'30px'}} className='text-bold'>TODO APP</h1>
      <input style={{margin:'10px',borderRadius:'5px',width:'250px'}} type="text" value={inputValue} onChange={handleInputChange} />
      <button className='btn btn-primary' onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className='d-flex justify-content-between'>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button className='btn btn-info' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todoapp
