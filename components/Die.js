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
        <p className="DieValue">{this.props.value}</p>
        <button onClick={() => this.props._handleDieRightClick(this)} id="right" className="DieButton">Right</button>
      </div>
    );
  }
}
