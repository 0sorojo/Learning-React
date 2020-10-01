import React, { Component } from "react";

class EventStarter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isToggled: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  redStyle = {
    color: "red",
  };

  blueStyle = {
    color: "blue",
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        isToggled: !prevState.isToggled,
      };
    });
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
        <button
          onClick={this.handleClick}
          style={this.state.isToggled ? this.redStyle : this.blueStyle}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default EventStarter;
