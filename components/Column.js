import React, { Component } from 'react';
import Card from './Card'
import './css/Column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  _renderCards() {
    if (this.props.name == "Backlog") {
      return this.props.cards.filter((el) => el.type == 'US').map((el, i) => (
        <Card type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i + el.type} />
      ))
    }
    if (this.props.name == "Controls") {
      return this.props.cards.filter((el) => el.type !== 'US').map((el, i) => (
        <Card type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i + el.type} />
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
