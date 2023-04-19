import React from "react";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <div className="app">
      <header>
        <ScoreBoard score={score} />
      </header>
    </div>
  );
}

export default App;
