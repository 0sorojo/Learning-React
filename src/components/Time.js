import React from "react";

const Time = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const styles = {
    backgroundColor: "#333",
    padding: 5,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#FF8C00";
  } else {
    timeOfDay = "night";
    styles.color = "#871F78";
  }

  return (
    <div>
      <h2 style={styles}>Good {`${timeOfDay}`}!</h2>
      <p>It is {`${date}`}</p>
    </div>
  );
};

export default Time;
