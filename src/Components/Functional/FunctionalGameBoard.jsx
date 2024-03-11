import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  currentFish,
  setCorrectCount,
  setIncorrectCount,
}) {
  const [fishGuess, setFishGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fishGuess.toLowerCase() === currentFish.name.toLowerCase()) {
      setCorrectCount((prevCount) => prevCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
    }
    setFishGuess("");
  };

  return (
    <div>
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={fishGuess}
            onChange={(e) => {
              setFishGuess(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
