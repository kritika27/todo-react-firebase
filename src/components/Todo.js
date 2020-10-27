import React from "react";
import firebase from "../util/firebase";
import "../App.css";

export default function Todo({ todo, setTitle }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      title: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          className={todo.complete ? "complete" : ""}
          type="text"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <i onClick={deleteTodo}>
        <img
          alt="delete"
          src="https://img.icons8.com/fluent/48/000000/trash.png"
        />
      </i>
      <i onClick={completeTodo}>
        <img
          alt="checked"
          src="https://img.icons8.com/fluent/48/000000/task-completed.png"
        />
      </i>
    </div>
  );
}
