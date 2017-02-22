import React, { Component } from 'react';
import DieButton from './DieButton'
import './css/Die.css'

export default class Die extends Component {
  constructor(props) {
    super(props)
  }

  _distributeButtons() {
    if (this.props.type == 'Analysis' || this.props.type == 'Testing') {
      return <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='M'/>
    } else {
      return [
        <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='L'/>,
        <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='R'/>
      ]
    }
  }

  _handleDieButtonClick(button) {
    this.props._handleDieClick(this, button)
  }

  render() {
    return (
      <div className="Die">
        <h5 className="DieValue">{this.props.type}: {this.props.value}</h5>
        {this._distributeButtons()}
      </div>
    );
  }
}

/* <button onClick={() => this.props._bajs(this)} id="bajs" className="DieButton">B</button>
<button onClick={() => this.props._handleDieLeftClick(this)} id="left" className="DieButton">L</button>
<button onClick={() => this.props._handleDieRightClick(this)} id="right" className="DieButton">R</button> */
