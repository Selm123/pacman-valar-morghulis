import React, { Component } from "react";

class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gameover hide">
        <h1>GameOver</h1>
      </div>
    );
  }
}

export default GameOver;
