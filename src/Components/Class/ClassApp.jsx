import { Component } from "react";
import { initialFishes } from "../../data";
import { ClassFinalScore } from "./ClassFinalScore";
import ClassScoreBoard from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  updateAppState = ([key, value]) => {
    this.setState({ [key]: value });
  };

  render() {
    const { incorrectCount, correctCount } = this.state;

    const currentFishIndex = incorrectCount + correctCount;
    const currentFish = initialFishes[currentFishIndex];
    const answersLeft = initialFishes
      .map((fish) => fish.name)
      .slice(currentFishIndex);
    const totalCount = initialFishes.length;
    const isGameOver = currentFishIndex === totalCount;

    return (
      <>
        {isGameOver(
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCount}
          />
        )}
        {
          !isGameOver(
            <>
              <ClassScoreBoard
                incorrectCount={incorrectCount}
                correctCount={correctCount}
                answersLeft={answersLeft}
              />
              <ClassGameBoard
                currentFish={currentFish}
                fishGuess={fishGuess}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
              />
            </>
          )
        }
      </>
    );
  }
}

export default ClassApp;
