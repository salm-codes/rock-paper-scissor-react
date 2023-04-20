import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import HouseCard from "./HouseCard";
import "./Game.css";
import bubble from "../assets/sounds/mixkit-water-bubble-1317.wav";
import winning from "../assets/sounds/mixkit-winning-notification-2018.wav";
import losing from "../assets/sounds/mixkit-losing-bleeps-2026.wav";
import PlayAgain from "./PlayAgain";
import { CountContext } from "../App";

const GamePlay = ({ tempArr, playerPicked, playerPickedNull }) => {
  const [housePicked, setHousePicked] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { score, setScore } = React.useContext(CountContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHousePicked(getRandomCard());
      housePick();
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [tempArr.current]);

  React.useEffect(() => {
    if (housePicked !== null) {
      const houseTimer = setTimeout(() => {
        handleResult(playerPicked, housePicked);
      }, 750);

      return () => clearInterval(houseTimer);
    }
  }, [housePicked]);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const housePick = () => {
    new Audio(bubble).play();
  };

  const gameWon = () => {
    new Audio(winning).play();
  };

  const gameLost = () => {
    new Audio(losing).play();
  };

  const handleScore = (value) => {
    if (value === "WIN") {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleResult = (playerPicked, housePicked) => {
    let pid = playerPicked.id;
    let hid = housePicked.id;

    if (
      (pid === 0 && hid === 1) ||
      (pid === 1 && hid === 2) ||
      (pid === 2 && hid === 0)
    ) {
      setResult("WIN");
      handleScore("WIN");
      gameWon();
    } else {
      setResult("LOSE");
      handleScore("LOSE");
      gameLost();
    }
  };

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * tempArr.current.length);

    return tempArr.current[randomIndex];
  };

  return (
    <div className="game">
      <div className="game-play">
        <PlayerCard
          playerPicked={playerPicked}
          circle={result === "WIN" && true}
        />
        {result !== null && !isMobile && (
          <PlayAgain
            result={result}
            playerPickedNull={playerPickedNull}
            housePickedNull={setHousePicked}
            resultNull={setResult}
          />
        )}
        <HouseCard
          playerPicked={playerPicked}
          housePicked={housePicked}
          tempArr={tempArr}
          circle={result === "LOSE" && true}
        />
      </div>
      {result !== null && isMobile && (
        <PlayAgain
          result={result}
          playerPickedNull={playerPickedNull}
          housePickedNull={setHousePicked}
          resultNull={setResult}
        />
      )}
    </div>
  );
};

export default GamePlay;
