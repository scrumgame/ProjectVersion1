import React, { Component } from 'react';
import './css/DieButton.css'

export default class DieButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <button onClick={() => this.props._handleDieButtonClick(this)} type={this.props.type} className="DieButton">{this.props.type}</button>
    );
  }
}
