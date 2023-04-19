import React from "react";
import Card from "./Card";

const PlayerCard = ({ playerPicked }) => {
  return (
    <div>
      <div className="player">
        <h2>YOU PICKED</h2>
        <div className="player-pick">
          <Card
            playerPicked={playerPicked}
            name={playerPicked.name}
            color={playerPicked.color}
            icon={playerPicked.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
