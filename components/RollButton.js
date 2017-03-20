import React, { Component } from 'react';
import './css/RollButton.css'

export default class RollButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props._rollDice()} className={this.props.className}>Work</button>
      </div>
    );
  }
}
