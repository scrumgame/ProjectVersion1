import React, { Component } from 'react';
import './column.css';
import Card from './card';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  renderCards() {
    if (this.props.name == "Backlog") {
      var cards = [];
      for (var i = 0; i < 60; i++) {
        cards.push(
          <Card key={i} id={i}/>
        )
      }
    return cards
    }
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3 className="columnHeadline">{ this.props.name }</h3>
        {this.renderCards()}
      </div>
    );
  }
}
