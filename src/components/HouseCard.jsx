import React from "react";
import Card from "./Card";
import ConcentricCircle from "./ConcentricCircle";

const HouseCard = ({ playerPicked, housePicked, circle }) => {
  return (
    <div className="house">
      <h2>HOUSE PICKED</h2>
      <div className="house-pick">
        {circle && <ConcentricCircle />}
        {housePicked ? (
          <Card
            playerPicked={playerPicked}
            name={housePicked.name}
            color={housePicked.color}
            icon={housePicked.icon}
          />
        ) : (
          <TempCircle />
        )}
      </div>
    </div>
  );
};

const TempCircle = () => {
  return (
    <div className="temp-circle">
      <div className="temp-circle-small"></div>
    </div>
  );
};

export default HouseCard;
