import React from "react";
import IconClose from "../assets/images/icon-close.svg";
import ImageRules from "../assets/images/image-rules.svg";
import "./PopUp.css";

const PopUp = ({ active, onHandlePopUp }) => {
  const handleClick = () => {
    onHandlePopUp();
  };

  return (
    <div className="rules-popup">
      <button onClick={handleClick} className="btn">
        Rules
      </button>
      <div className={`rules-content ${active ? "popup-active" : ""}`}>
        <div className="rules-close">
          <h3>Rules</h3>
          <div onClick={handleClick} className="close-icon">
            <img src={IconClose} alt="Close Icon" />
          </div>
        </div>
        <div className="rules-content-box">
          <img src={ImageRules} alt="Rules Image" />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
