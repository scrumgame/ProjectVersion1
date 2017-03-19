import React, { Component } from 'react';
import Logo from './Logo'

export default class GameOver extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Thank you {this.props.teamname} for playing!</h1>
      </div>
    );
  }
}
