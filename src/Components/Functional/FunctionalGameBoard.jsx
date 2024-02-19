import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard({
  fishGuess,
  setFishGuess,
  setCorrectCount,
  setIncorrectCount,
  removeFishGuess,
  correctCount,
  incorrectCount,
  answersLeft,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextFishToName = initialFishes[currentIndex];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fishGuess.toLowerCase() === nextFishToName.name) {
      setCorrectCount((prevCount) => parseInt(prevCount) + 1);
    } else {
      setIncorrectCount((prevCount) => parseInt(prevCount) + 1);
    }
    removeFishGuess();
    setCurrentIndex(
      (prevIndex) => (parseInt(prevIndex) + 1) % initialFishes.length
    );
  };

  return (
    <div>
      <FunctionalScoreBoard
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        answersLeft={answersLeft}
      />
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
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
