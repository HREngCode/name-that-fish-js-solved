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
      totalCount: initialFishes.length,
      answersLeft: initialFishes.map((fish) => fish.name),
      fishGuess: "",
      currentFish: initialFishes[0],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const { fishGuess, currentFish, answersLeft } = this.state;

    if (fishGuess.toLowerCase() === currentFish.name) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }

    const updatedAnswersLeft = [...answersLeft.slice(1)];

    const nextFishIndex =
      initialFishes.findIndex((fish) => fish.name === currentFish.name) + 1;
    if (nextFishIndex < initialFishes.length) {
      this.setState({
        currentFish: initialFishes[nextFishIndex],
        answersLeft: updatedAnswersLeft,
      });
    } else {
      this.setState({ endGame: true });
    }

    this.setState({ fishGuess: "" });
  }

  handleChange(e) {
    this.setState({ fishGuess: e.target.value });
  }

  render() {
    const {
      incorrectCount,
      correctCount,
      totalCount,
      answersLeft,
      fishGuess,
      endGame,
    } = this.state;
    const { currentFish } = this.state;

    if (endGame) {
      return (
        <ClassFinalScore correctCount={correctCount} totalCount={totalCount} />
      );
    }

    return (
      <div>
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
      </div>
    );
  }
}

export default ClassApp;
