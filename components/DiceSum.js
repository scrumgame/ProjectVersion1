import React, { Component } from 'react';

export default class DiceSum extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`col-sm-2 DiceSum ${this.props.className}`}>{this.props.value} / {this.props.dice}</div>
    );
  }
}
