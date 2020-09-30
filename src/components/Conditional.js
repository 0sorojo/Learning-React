import React from "react";

const Conditional = (props) => {
  return (
    <div>
      <h1>{props.season.title}</h1>
      <h3>It's the season of {props.season.season}</h3>
    </div>
  );
};

export default Conditional;
