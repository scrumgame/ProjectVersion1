import React, { Component } from 'react';
import Column from './Column'
import Card from './Card'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      columns: ['Backlog', 'Analysis', 'Development', 'Testing', 'Done'],
      dices: {}
    };
  }

  componentDidMount() {
    const cards = [];
    for (var i = 0; i < 60; i++) {
      const a    = Math.floor((Math.random() * 10) + 1);
      const d    = Math.floor((Math.random() * 10) + 1);
      const t    = Math.floor((Math.random() * 10) + 1);
      const cash = Math.floor((Math.random() * 450) + 1);
      const id = i;

      const card = {
        type: 'US',
        cash: cash,
        a: a,
        d: d,
        t: t,
        id: i
      }
      cards.push(card);
    }

    this.setState({
      cards: this.state.cards.concat(cards)
    })

  }

  _renderColumns() {
    return this.state.columns.map(name => (
      <Column key={name} name={name} />
    ));
  }

  _renderCards() {
    return this.state.cards.map((v, i) => (
      <Card type={v.type} cash={v.cash} a={v.a} d={v.d} t={v.t} key={i} />
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this._renderColumns()}
          {this._renderCards()}
        </div>
      </div>
    )
  }

}
