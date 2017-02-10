import React, { Component } from 'react';

export default class Die extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.value}</p>
      </div>
    );
  }
}
