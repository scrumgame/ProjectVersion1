import React, { Component } from 'react';
import Column from './Column'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      columns: ['Controls', 'Backlog', 'Analysis', 'Development', 'Testing', 'Done'],
      dices: {}
    };
  }

  componentDidMount() {
    this._generateUsCards()
  }

  _generateUsCards() {
    const cards = [];

    for (var i = 0; i < 60; i++) {
      const cashValues = [50, 100, 150, 200, 250, 300, 350, 400, 450];
      const a    = Math.round((Math.random() * 10) + 1);
      const d    = Math.round((Math.random() * 10) + 1);
      const t    = Math.round((Math.random() * 10) + 1);
      const cash = cashValues[Math.floor(Math.random() * cashValues.length)];
      const id   = i;

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
      <Column cards={this.state.cards} key={name} name={name} />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this._renderColumns()}
        </div>
      </div>
    )
  }

}
