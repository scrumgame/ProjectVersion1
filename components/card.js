import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props)

  }

  randomValues() {
    let analysis = Math.floor((Math.random() * 10) + 1);
    let development = Math.floor((Math.random() * 10) + 1);
    let testing = Math.floor((Math.random() * 10) + 1);
    let cash = Math.floor((Math.random() * 450) + 1);

    return ([
        <h4>User story {this.props.id + 1}</h4>,
        <p>Value: {cash}</p>,
        <p>Analysis: {analysis}</p>,
        <p>Development: {development}</p>,
        <p>Testing: {testing}</p>
    ])
  }

  render (){
    return(
      <div className="CardDiv">
        {this.randomValues()}
      </div>
    );
  }
}
