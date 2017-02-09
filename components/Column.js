import React, { Component } from 'react';
import Card from './Card'
import './css/Column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  _renderCards() {
    if (this.props.name == "Backlog") {
      return this.props.cards.map((v, i) => (
        <Card type={v.type +' '+ (i+1)} cash={v.cash} a={v.a} d={v.d} t={v.t} key={i} />
      ))
    }
  }

  render() {
    return (
      <div className="column col-sm-2">
        <h3>{this.props.name}</h3>
        {this._renderCards()}
      </div>
    );
  }
}
