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
    if (this.props.a >= 0 && this.props.d >= 0 && this.props.t >= 0 ) {
      return [
        <p>A: {this.props.a}</p>,
        <p>D: {this.props.d}</p>,
        <p>T: {this.props.t}</p>
      ]
    }
  }

  render (){
    return(
      <div onClick={() => this.props._handleCardClick(this)} className="CardDiv">
        <h4>{this.props.type} {this.props.number}</h4>
        {this._ifCash()}
        {this._ifADT()}
      </div>
    );
  }
}
