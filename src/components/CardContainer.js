import React from "react";
import Card from "./Card";
import cardData from "../data/CardData";

const CardContainer = () => {
  const cardComponents = cardData.map((card) => <Card key card={card} />);

  return (
    <div
      style={{
        border: "1px solid #333",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {cardComponents}
    </div>
  );
};

export default CardContainer;
