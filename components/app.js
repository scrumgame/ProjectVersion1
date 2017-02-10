import React, { Component } from 'react';
import Column from './Column'
import Die from './Die'
import DieColumns from './DieColumns'
import DevelopmentCards from './resources/DevelopmentCards'
import MaintenanceCards from './resources/MaintenanceCards'
import ActionCards from './resources/ActionCards'
import MultipleChoiceCards from './resources/MultipleChoiceCards'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      columns: ['Controls', 'Backlog', 'Analysis', 'Development',  'Testing', 'Done'],
      dice:  [{name: 'one',   dieColumn: 2},
              {name: 'two',   dieColumn: 3},
              {name: 'three', dieColumn: 3},
              {name: 'four',  dieColumn: 3},
              {name: 'five',  dieColumn: 3},
              {name: 'six',   dieColumn: 4}]
    };
  }

  componentDidMount() {
    this._generateUsCards()
  }

  _generateUsCards() {
    const cards = [];
    console.log(DevelopmentCards)

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
        us_id: i
      }
      cards.push(card);
    }
    this.setState({
      cards: this.state.cards.concat(cards, DevelopmentCards, MaintenanceCards, ActionCards, MultipleChoiceCards)
    })
  }

  _renderColumns() {
    return this.state.columns.map(name => (
      <Column cards={this.state.cards} key={name} name={name} />
    ));
  }

  _die() {
    var die = Math.floor((Math.random() * 6) + 1);
    return die;
  }

  _renderDice() {
    return this.state.dice.map(dice => (
      <Die value={this._die()} key={dice.name} position={dice.dieColumn}/>
    ));
  }

  _renderDieColumns() {
    return this.state.columns.map((name, i) => (
      <DieColumns key={name} name={name} id={i} />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this._renderDieColumns()}
          {this._renderDice()}
        </div>
        <div className="row">
          {this._renderColumns()}
        </div>
      </div>
    )
  }

}
