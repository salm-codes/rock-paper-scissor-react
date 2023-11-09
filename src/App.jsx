import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";

export const CountContext = React.createContext();

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <div className="app">
      <ScoreBoard score={score} />
      <CountContext.Provider value={{ score, setScore }}>
        <Game />
      </CountContext.Provider>
    </div>
  );
}

export default App;
