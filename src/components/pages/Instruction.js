import React, { Component } from "react";

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="instruction hide">
        <h1>Instructions</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus recusandae ad sequi doloribus nam facilis possimus asperiores, officiis, ipsam odit numquam, rem assumenda voluptatum. Molestiae illum aut ipsum voluptates consectetur.</p>
        <button id="got-it-btn">Got it!</button>
      </div>
    );
  }
}

export default Instruction;
