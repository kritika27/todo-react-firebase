import React from 'react';
import firebase from '../util/firebase';
import '../App.css';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div>
      <h2 className={todo.complete ? 'complete' : ''}>{todo.title}</h2>
          <i onClick={deleteTodo}><img alt="hi" src="https://img.icons8.com/fluent/48/000000/trash.png"/></i>
      <i onClick={completeTodo}><img alt="bye" src="https://img.icons8.com/fluent/48/000000/task-completed.png"/></i>
    </div>
  );
}
