import React, { Component } from 'react';
import './css/Die.css'

export default class Die extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Die">
        <button onClick={() => this.props._handleDieLeftClick(this)} id="left" className="DieButton">Left</button>
        <h5 className="DieValue">{this.props.value}</h5>
        <button onClick={() => this.props._handleDieRightClick(this)} id="right" className="DieButton">Right</button>
      </div>
    );
  }
}
