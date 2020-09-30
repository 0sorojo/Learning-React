import React, { Component } from "react";
import EventStarter from "./EventStarter";
import Conditional from "./Conditional";

class StateContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "Changes of State",
      season: "Autumn",
      isLoading: true,
      unreadMessages: ["a", "b", "c"],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);
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
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Conditional season={this.state} />
        )}

        <EventStarter />
        <div>
          {this.state.unreadMessages.length > 0 && (
            <h2>You Have {this.state.unreadMessages.length} Unread Messages</h2>
          )}
        </div>
      </div>
    );
  }
}

export default StateContainer;
