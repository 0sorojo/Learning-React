import React from "react";
import "../index.css";
import TodoItem from "./TodoItem";
import todosData from "../data/todosData";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }
  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return <div className="todo-container">{todoComponents}</div>;
  }
}

export default Todo;
