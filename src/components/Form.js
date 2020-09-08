import React, { useState } from 'react';
import firebase from '../util/firebase';
import "./Form.css"

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
      e.preventDefault();
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };
if(title)
    todoRef.push(todo);
  };
  
  return (
    <div>
    
      <input type="text" onChange={handleOnChange} value={title} />
      <button className="btn" onClick={createTodo}>Add Task</button>
     
    </div>
  );
}
