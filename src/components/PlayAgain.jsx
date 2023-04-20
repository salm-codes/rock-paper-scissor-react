import React from "react";

const PlayAgain = ({
  result,
  playerPickedNull,
  housePickedNull,
  resultNull,
}) => {
  const handleReset = () => {
    playerPickedNull(null);
    housePickedNull(null);
    resultNull(null);
  };
  return (
    <div className="play-again">
      <h1 className="result">{`YOU ${result}`}</h1>
      <button onClick={handleReset} className="btn-play">
        PLAY AGAIN
      </button>
    </div>
  );
};

export default PlayAgain;
