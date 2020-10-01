import React from "react";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  let styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 20px 0",
    width: "70%",
    borderBottom: "1px solid #cecece",
    fontSize: "15px",
    color: "#333333",
  };

  return (
    <div style={styles}>
      <input
        style={{ marginRight: "10px" }}
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      ></input>
      <p style={props.todo.completed ? completedStyle : null}>
        {props.todo.task}
      </p>
    </div>
  );
};

export default TodoItem;
