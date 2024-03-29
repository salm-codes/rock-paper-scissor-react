import React from "react";
import "./Game.css";
import IconPaper from "../assets/images/icon-paper.svg";
import IconRock from "../assets/images/icon-rock.svg";
import IconScissor from "../assets/images/icon-scissors.svg";
import GameBoard from "./GameBoard";
import PopUp from "./PopUp";
import GamePlay from "./GamePlay";

const Game = () => {
  const [playerPicked, setPlayerPicked] = React.useState(null);
  const [isPopUpOpen, setPopUpOpen] = React.useState(false);
  const tempArr = React.useRef([]);

  const cardArr = [
    { id: 0, name: "paper", color: "blue", icon: IconPaper },
    { id: 1, name: "rock", color: "red", icon: IconRock },
    { id: 2, name: "scissor", color: "yellow", icon: IconScissor },
  ];

  const handlePlayerPicked = (index) => {
    setPlayerPicked(cardArr[index]);
    tempArr.current = cardArr.filter(
      (card) => card.name !== cardArr[index].name
    );
  };

  const handlePlayerPickedToNull = () => {
    setPlayerPicked(null);
  };

  const handlePopUp = () => {
    setPopUpOpen((prevState) => !prevState);
  };

  return (
    <main>
      <div className="game">
        {playerPicked ? (
          <GamePlay
            playerPicked={playerPicked}
            tempArr={tempArr}
            playerPickedNull={handlePlayerPickedToNull}
          />
        ) : (
          <GameBoard
            cardArr={cardArr}
            onHandlePlayerPicked={handlePlayerPicked}
          />
        )}
        <PopUp active={isPopUpOpen} onHandlePopUp={handlePopUp} />
        <Overlay active={isPopUpOpen} />
      </div>
    </main>
  );
};

const Overlay = ({ active }) => (
  <div className={`overlay ${active ? "active" : ""}`}></div>
);

export default Game;
