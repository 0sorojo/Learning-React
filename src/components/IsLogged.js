import React, { Component } from "react";
import "../index.css";

class IsLogged extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState((prevState) => {
      return {
        isLogged: !prevState.isLogged,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {this.state.isLogged ? (
          <h3 className="header-item">U R Logged In</h3>
        ) : (
          <h3 className="header-item">U R Logged Out</h3>
        )}

        <button onClick={this.clickHandler} className="button">
          {this.state.isLogged ? "Log Out" : "Log In"}
        </button>
      </div>
    );
  }
}

export default IsLogged;
