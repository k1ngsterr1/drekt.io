import React from "react";

import heading from "../assets/heading.svg";
import threeD from "../assets/black.png";

import styles from "../styles/main-styles/main.css";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="container">
        <main className="main-content">
          <img className="heading" src={heading}></img>
          {/* Тут должна быть 3д модель */}
          <img className="model" src={threeD}></img>
          <h3 className="model-text">DREKT.IO</h3>
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
