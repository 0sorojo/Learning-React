import React, { Component } from "react";

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
      <div>
        <h1>{this.state.title}</h1>
        <h3>It's the season of {this.state.season}</h3>
      </div>
    );
  }
}

export default StateContainer;
