import React from "react";

const Card = ({
  name,
  color,
  icon,
  index,
  playerPicked,
  onHandlePlayerPicked,
}) => {
  const handleClick = (e) => {
    onHandlePlayerPicked(e.currentTarget.dataset.id);
  };
  return (
    <div className={playerPicked ? "" : `${name}-circle`}>
      <div
        onClick={playerPicked ? null : handleClick}
        className={`big-circle ${color} choose`}
        data-id={index}
      >
        <div className={`big-circle__transform light-${color}`}>
          <div className="small-circle">
            <div className="small-circle__transform light-white">
              <img src={icon} alt="Rock Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
