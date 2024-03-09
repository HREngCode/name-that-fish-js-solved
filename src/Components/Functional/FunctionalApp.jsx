import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { initialFishes } from "../../data";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(
    initialFishes.map((fish) => fish.name)
  );
  const currentFishIndex = incorrectCount + correctCount;
  const gameOver = currentFishIndex === initialFishes.length;
  const totalCount = initialFishes.length;

  return (
    <>
      {gameOver ? (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            currentFish={initialFishes[currentFishIndex]}
            answersLeft={answersLeft}
            setAnswersLeft={setAnswersLeft}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
          />
        </>
      )}
    </>
  );
}
