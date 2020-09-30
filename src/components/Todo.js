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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  };

  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));

    return <div className="todo-container">{todoComponents}</div>;
  }
}

export default Todo;
