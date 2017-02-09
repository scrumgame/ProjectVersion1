import React, { Component } from 'react';
import './css/Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render (){
    return(
      <div className="CardDiv">
        <h4>{this.props.type}</h4>
        <p>${this.props.cash}</p>
        <p>A: {this.props.a}</p>
        <p>D: {this.props.d}</p>
        <p>T: {this.props.t}</p>
      </div>
    );
  }
}
