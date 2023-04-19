import React from "react";
import ScoreBoardLogo from "../assets/images/logo.svg";
import "./ScoreBoard.css";

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard">
      <div>
        <img src={ScoreBoardLogo} alt="Logo" />
      </div>
      <div className="score-card">
        <p className="score-text">score</p>
        <p className="score-points">{score}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
