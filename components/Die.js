import React, { Component } from 'react';
import './css/Die.css'

export default class Die extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div onClick={() => this.props._handleDieClick(this)} className="bajs">
        <p>{this.props.value} : {this.props.dieColumn}</p>
      </div>
    );
  }
}
