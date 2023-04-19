import React from "react";
import Card from "./Card";

const HouseCard = ({ playerPicked, tempArr }) => {
  let [housePicked, setHousePicked] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setHousePicked(getRandomCard());
    }, 750);
  }, [tempArr.current]);

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * tempArr.current.length);

    return tempArr.current[randomIndex];
  };

  return (
    <div className="house">
      <h2>HOUSE PICKED</h2>
      <div className="house-pick">
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
