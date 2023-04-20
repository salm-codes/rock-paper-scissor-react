import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";

export const CountContext = React.createContext();

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <div className="app">
      <header>
        <ScoreBoard score={score} />
      </header>
      <CountContext.Provider value={{ score, setScore }}>
        <main>
          <Game />
        </main>
      </CountContext.Provider>
    </div>
  );
}

export default App;
