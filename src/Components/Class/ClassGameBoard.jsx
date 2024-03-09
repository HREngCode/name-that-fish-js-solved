import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  render() {
    const { fishGuess, currentFish, onChange, onSubmit } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={onSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={fishGuess}
            onChange={onChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
