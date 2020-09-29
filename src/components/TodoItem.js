import React from "react";

const TodoItem = () => {
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
      <input style={{ marginRight: "10px" }} type="checkbox"></input>
      <p>place holder for todos</p>
    </div>
  );
};

export default TodoItem;
