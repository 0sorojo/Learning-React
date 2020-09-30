import React from "react";
import MyInfo from "./MyInfo";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";
import Time from "./Time";
import CardContainer from "./CardContainer";
import StateContainer from "./StateContainer";

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <MyInfo />
        <StateContainer />
        <Time />
        <Todo />
        <CardContainer />
        <Footer />
      </section>
    );
  }
}

export default App;
