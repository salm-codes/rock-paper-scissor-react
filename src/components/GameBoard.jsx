import React from "react";
import TriangleBgIcon from "../assets/images/bg-triangle.svg";
import Card from "./Card";

const GameBoard = ({ cardArr, onHandlePlayerPicked }) => {
  return (
    <div className="game-board">
      <img src={TriangleBgIcon} alt="Triangle Background" />

      <div className="game-circle">
        {cardArr.map((card, index) => (
          <Card
            key={card.name}
            name={card.name}
            color={card.color}
            icon={card.icon}
            index={index}
            cardArr={cardArr}
            onHandlePlayerPicked={onHandlePlayerPicked}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
