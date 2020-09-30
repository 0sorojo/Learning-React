import React, { Component } from "react";
import EventStarter from "./EventStarter";

class StateContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "Changes of State",
      season: "Autumn",
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>{this.state.title}</h1>
          <h3>It's the season of {this.state.season}</h3>
        </div>
        <EventStarter />
      </div>
    );
  }
}

export default StateContainer;
