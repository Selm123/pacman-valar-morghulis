import React, { Component } from "react";
import $ from "jquery";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      selectedOption: this.props.selectedOption
    };
    this.onValueChangeUsername = this.onValueChangeUsername.bind(this);
    this.onValueChangeMode = this.onValueChangeMode.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
    console.log(this.state.username);
    $('.title').addClass('hide');
    $('.play').removeClass('hide');
  }

  onValueChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onValueChangeMode(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
      <div className="title">
        <div className="title-text">
          <div className="title-text-p"></div>
          <div className="title-text-a"></div>
          <div className="title-text-c"></div>
          <div className="title-text-m"></div>
          <div className="title-text-a"></div>
          <div className="title-text-n"></div>
        </div>
        <p className="sub-title">~ Valar Morghulis ~</p>
        <form className="title-form" onSubmit={this.formSubmit}>
          <input className="usernameInput" type="text" placeholder="Please enter username" onChange={this.onValueChangeUsername} required/>
          <p>Play Mode:</p>
          <label>
            <input type="radio" name="mode" value="keyboard" checked={this.state.selectedOption === "keyboard"} onChange={this.onValueChangeMode} />
            Keyboard
          </label>

          <label>
            <input type="radio" name="mode" value="voiceControl" checked={this.state.selectedOption === "voiceControl"} onChange={this.onValueChangeMode} />
            Voice Control
          </label>

          <p><button id="title-start">Enter Game</button></p>
        </form>
      </div>
    );
  }
}

export default Title;
