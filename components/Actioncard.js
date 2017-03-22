import React, { Component } from 'react'

export default class Actioncard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>{this.props.actioncard.text}</p>
    );
  }
}
