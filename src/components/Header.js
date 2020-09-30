import React from "react";
import IsLogged from "./IsLogged";
import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="image-container">
          <IsLogged />
        </div>
        <div className="image-container">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/41676/dry-tree-clipart-md.png"
            alt="the Logo"
            className="header-image"
          />
        </div>

        <ul className="list">
          <li className="header-item">link 1</li>
          <li className="header-item">link 2</li>
          <li className="header-item">link 3</li>
        </ul>
      </header>
    );
  }
}

export default Header;
