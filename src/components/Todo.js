import React from "react";
import "../index.css";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div className="todo-container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default Todo;
