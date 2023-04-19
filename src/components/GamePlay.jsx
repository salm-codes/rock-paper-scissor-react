import React from "react";
import PlayerCard from "./PlayerCard";
import HouseCard from "./HouseCard";

const GamePlay = ({ playerPicked }) => {
  return (
    <div className="game">
      <div className="game-play">
        <PlayerCard playerPicked={playerPicked} />
        <HouseCard />
      </div>
    </div>
  );
};

export default GamePlay;
