import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props)

  }

  getRandomA() {
    return Math.floor((Math.random() * 10) + 1);
  }
  getRandomD() {
    return Math.floor((Math.random() * 10) + 1);
  }
  getRandomT(){
    return Math.floor((Math.random() * 10) + 1);
  }
  render (){
    return(
      <div className="CardDiv">
        <h4>User stories</h4>
        <p>Analysis: {this.getRandomA()}</p>
        <p>Development: {this.getRandomD()}</p>
        <p>Testing: {this.getRandomT()}</p>
      </div>
    );
  }
}


export default Card;
