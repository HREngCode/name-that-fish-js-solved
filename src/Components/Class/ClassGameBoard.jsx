import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
  };

  handleInputChange = (value) => {
    this.setState({ fishGuess: value });
  };

  handleAnswer = (answer) => {
    const { correctCount, incorrectCount } = this.props;
    const isAnswerCorrect =
      answer.toLowerCase() === this.props.currentFish.name.toLowerCase();

    const params = isAnswerCorrect
      ? ["correctCount", correctCount + 1]
      : ["incorrectCount", incorrectCount + 1];

    this.props.updateAppState(params);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.handleAnswer(this.state.fishGuess);
    this.setState({ fishGuess: "" });
  }

  render() {
    const { currentFish } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishGuess}
            onChange={(e) => this.handleInputChange(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
