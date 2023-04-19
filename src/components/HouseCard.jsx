import React from "react";
import Card from "./Card";

const HouseCard = ({ playerPicked, tempArr }) => {
  let [housePicked, setHousePicked] = React.useState(null);

  return (
    <div className="house">
      <h2>HOUSE PICKED</h2>
      <div className="house-pick">
        <TempCircle />
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
