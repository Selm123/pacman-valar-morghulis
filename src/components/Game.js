import React, { Component } from "react";
import Title from "./pages/Title";
import Mode from "./pages/Mode";
import Instruction from "./pages/Instruction";
import Play from "./pages/Play";
import GameOver from "./pages/GameOver";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Pacman Valar Morghulis</h1>
        <Title />
        <Mode />
        <Instruction />
        <Play />
        <GameOver />
      </div>
    );
  }
}

export default Game;
