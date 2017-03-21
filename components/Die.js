import React, { Component } from 'react';
import DieButton from './DieButton'
import './css/Die.css'

export default class Die extends Component {
  constructor(props) {
    super(props)
  }

  // Returns correct move buttons on each die
  _distributeButtons() {
    if (this.props.type == 'Analysis' || this.props.type == 'Testing') {
      return <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='transfer'/>
    } else {
      return [
        <DieButton key={1} _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='chevron-left'/>,
        <DieButton key={2} _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='chevron-right'/>
      ]
    }
  }

  _handleDieButtonClick(button) {
    this.props._handleDieClick(this, button)
  }

  render() {
    return (
      <div className="Die">
        <h5 className="DieValue glyphicon glyphicon-user"></h5>
        {this._distributeButtons()}
        <p>{this.props.value}</p>
      </div>
    );
  }
}
