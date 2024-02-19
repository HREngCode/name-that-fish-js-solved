import { useState, useEffect } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp({
  fishGuess,
  setFishGuess,
  incorrectCount,
  setIncorrectCount,
  correctCount,
  setCorrectCount,
  totalCount,
  setTotalCount,
  answersLeft,
  setAnswersLeft,
}) {
  const [gameOver, setGameOver] = useState(false);
  const removeFishGuess = () => {
    setAnswersLeft((prevAnswersLeft) =>
      prevAnswersLeft.filter((answer) => answer !== fishGuess)
    );
    setFishGuess("");
  };

  const remainingFishNames = answersLeft;

  useEffect(() => {
    if (remainingFishNames.length === 0) {
      setGameOver(true);
    }
  }, [remainingFishNames]);

  return (
    <>
      {gameOver ? (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      ) : (
        <FunctionalGameBoard
          fishGuess={fishGuess}
          setFishGuess={setFishGuess}
          incorrectCount={incorrectCount}
          setIncorrectCount={setIncorrectCount}
          correctCount={correctCount}
          setCorrectCount={setCorrectCount}
          answersLeft={answersLeft}
          setAnswersLeft={setAnswersLeft}
          removeFishGuess={removeFishGuess}
          remainingFishNames={remainingFishNames}
        />
      )}
    </>
  );
}
