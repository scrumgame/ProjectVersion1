import React, { Component } from 'react';
import './css/diceSum.css';

export default class DiceSum extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-sm-2 DiceSum"><h4>{this.props.value} / {this.props.dice}</h4></div>
    );
  }
}
