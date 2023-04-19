import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <div className="app">
      <header>
        <ScoreBoard score={score} />
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
