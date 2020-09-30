import React, { Component } from "react";

class EventStarter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      style: {
        padding: "5px",
        color: "black",
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <img
          alt="gif"
          onMouseOver={this.handleClick}
          src="https://media.giphy.com/media/WQaHrd6Z3038DofLRl/giphy.gif"
        />
        <br />
        <br />
        <div>{this.state.count}</div>
        <button onClick={this.handleClick} style={this.state.style}>
          Click Me
        </button>
      </div>
    );
  }
}

export default EventStarter;
