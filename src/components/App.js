import React from "react";
import MyInfo from "./MyInfo";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";
import Time from "./Time";
import CardContainer from "./CardContainer";

const App = () => {
  return (
    <section>
      <Header />
      <MyInfo />
      <Time />
      <Todo />
      <CardContainer />
      <Footer />
    </section>
  );
};

export default App;
