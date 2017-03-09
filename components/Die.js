import React, { Component } from 'react';
import DieButton from './DieButton'
import './css/Die.css'

export default class Die extends Component {
  constructor(props) {
    super(props)
  }

  _distributeButtons() {
    if (this.props.type == 'Analysis' || this.props.type == 'Testing') {
      return <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='transfer'/>
    } else {
      return [
        <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='chevron-left'/>,
        <DieButton _handleDieButtonClick={this._handleDieButtonClick.bind(this)} type='chevron-right'/>
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
        <p>{this.props.value}</p>
        {this._distributeButtons()}
      </div>
    );
  }
}
