import React, { Component } from 'react';
import './css/Die.css'

export default class DieButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props._handleDieButtonClick(this)} type={this.props.type} className={`glyphicon glyphicon-${this.props.type}`}></button>
    );
  }
}
