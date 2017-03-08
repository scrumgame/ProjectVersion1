import React, { Component } from 'react';
import './css/Input.css'

export default class Input extends Component {
  constructor(props) {
    super(props)
  }

  // choose teamname input
  render() {
    return (
      <input placeholder={this.props.placeholder} type={this.props.type} className={this.props.className} value={this.props.value} required />
    );
  }
}
