import { useState } from "react";
import "./App.css";
import { ClassApp } from "./Components/Class/ClassApp";
import { FunctionalApp } from "./Components/Functional/FunctionalApp";

function App() {
  const [fishGuess, setFishGuess] = useState("");
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(4);

  return (
    <div className="App">
      <h1>Name That Fish</h1>
      <div className="split">
        <div className="left">
          <h3>Functional</h3>
          <FunctionalApp
            fishGuess={fishGuess}
            setFishGuess={setFishGuess}
            correctCount={correctCount}
            setCorrectCount={setCorrectCount}
            totalCount={totalCount}
            setTotalCount={setTotalCount}
            incorrectCount={incorrectCount}
            setIncorrectCount={setIncorrectCount}
            answersLeft={answersLeft}
            setAnswersLeft={setAnswersLeft}
          />
        </div>
        <div className="right">
          <h3>Class</h3>
          <ClassApp />
        </div>
      </div>
    </div>
  );
}

export default App;
