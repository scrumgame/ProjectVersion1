import React, { Component } from 'react';
import './css/Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  _ifCash() {
    if (this.props.cash) return <p>${this.props.cash}</p>
  }

  _ifADT() {
    if (this.props.a && this.props.d && this.props.t) {
      return [
        <p>A: {this.props.a}</p>,
        <p>D: {this.props.d}</p>,
        <p>T: {this.props.t}</p>
      ]
    }
  }

  render (){
    return(
      <div className="CardDiv">
        <h4>{this.props.type}</h4>
        {this._ifCash()}
        {this._ifADT()}
      </div>
    );
  }
}
