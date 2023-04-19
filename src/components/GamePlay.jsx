import React from "react";
import PlayerCard from "./PlayerCard";
import HouseCard from "./HouseCard";
import "./Game.css";

const GamePlay = ({ tempArr, playerPicked }) => {
  const [housePicked, setHousePicked] = React.useState(null);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHousePicked(getRandomCard());
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [tempArr.current]);

  React.useEffect(() => {
    if (housePicked !== null) {
      setTimeout(() => {
        handleResult(playerPicked, housePicked);
      }, 1000);
    }
  }, [housePicked]);

  const handleResult = (playerPicked, housePicked) => {
    let pid = playerPicked.id;
    let hid = housePicked.id;

    if (
      (pid === 0 && hid === 1) ||
      (pid === 1 && hid === 2) ||
      (pid === 2 && hid === 0)
    ) {
      setResult("WIN");
    } else {
      setResult("LOSE");
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
        {result !== null && <PlayAgain result={result} />}
        <HouseCard
          playerPicked={playerPicked}
          housePicked={housePicked}
          tempArr={tempArr}
          circle={result === "LOSE" && true}
        />
      </div>
    </div>
  );
};

const PlayAgain = ({ result }) => {
  return (
    <div className="play-again">
      <h1 className="result">{`YOU ${result}`}</h1>
      <button className="btn-play">PLAY AGAIN</button>
    </div>
  );
};

export default GamePlay;
