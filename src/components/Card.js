import React from "react";

const Card = (props) => {
  let cardStyles = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    border: "1px solid black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  };

  return (
    <div style={cardStyles}>
      <h2>{props.card.name}</h2>
      <img alt="cards" src={props.card.imgUrl} />
      <h3>{props.card.artist}</h3>
      <p>{props.card.flavorText}</p>
    </div>
  );
};

export default Card;
