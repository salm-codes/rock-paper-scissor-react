import React from "react";
import PlayerCard from "./PlayerCard";
import HouseCard from "./HouseCard";

const GamePlay = ({ tempArr, playerPicked }) => {
  return (
    <div className="game">
      <div className="game-play">
        <PlayerCard playerPicked={playerPicked} />
        <HouseCard playerPicked={playerPicked} tempArr={tempArr} />
      </div>
    </div>
  );
};

export default GamePlay;
