import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <img className="header-image" />
      <ul className="list">
        <li className="header-item">link 1</li>
        <li className="header-item">link 2</li>
        <li className="header-item">link 3</li>
      </ul>
    </header>
  );
};

export default Header;