import React from "react";
import "./Game.css";
import IconPaper from "../assets/images/icon-paper.svg";
import IconRock from "../assets/images/icon-rock.svg";
import IconScissor from "../assets/images/icon-scissors.svg";
import GameBoard from "./GameBoard";

const Game = () => {
  const [playerPicked, setPlayerPicked] = React.useState(null);

  const cardArr = [
    { id: 0, name: "paper", color: "blue", icon: IconPaper },
    { id: 1, name: "rock", color: "red", icon: IconRock },
    { id: 2, name: "scissor", color: "yellow", icon: IconScissor },
  ];

  const handlePlayerPicked = (index) => {
    setPlayerPicked(cardArr[index]);
  };

  return (
    <div className="game">
      <GameBoard cardArr={cardArr} onHandlePlayerPicked={handlePlayerPicked} />
    </div>
  );
};

export default Game;
