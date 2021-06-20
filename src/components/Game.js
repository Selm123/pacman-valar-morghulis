import React, { Component } from "react";
import Title from "./pages/Title";
import Instruction from "./pages/Instruction";
import Play from "./pages/Play";
import GameOver from "./pages/GameOver";
import $ from "jquery";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fortune: 0,
      age: 0,
      username: "",
      selectedOption: null,
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
  }

  componentDidMount() {
    // $("#start-btn").on("click", () => {
    //   $(".title").removeClass("show").addClass("hide");
    //   $(".instruction").removeClass("hide").addClass("show");
    // });
    $("#got-it-btn").on("click", () => {
      $(".instruction").removeClass("show").addClass("hide");
      $(".play").removeClass("hide").addClass("show");
    });
  }

  changeUserName = (username) => {
    this.setState({username: username});
  }

  changeSelectedOption = (option) => {
    this.setState({selectedOption: option});
  }

  render() {
    return (
      <div className="main">
        <Title changeUserName={this.changeUserName} changeSelectedOption={this.changeSelectedOption} />
        <Instruction />
        <Play fortune={this.state.fortune} age={this.state.age} username={this.state.username} selectedOption={this.state.selectedOption}/>
        <GameOver />
      </div>
    );
  }
}

export default Game;
