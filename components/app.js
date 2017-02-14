import React, { Component } from 'react';
import _ from 'underscore'
import Column from './Column'
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
      diecolumns: [1, 2, 3],
      dice:  [{name: 'one',   dieColumn: 1, id: 0},
              {name: 'two',   dieColumn: 2, id: 1},
              {name: 'three', dieColumn: 2, id: 2},
              {name: 'four',  dieColumn: 2, id: 3},
              {name: 'five',  dieColumn: 2, id: 4},
              {name: 'six',   dieColumn: 3, id: 5}]
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

  _renderDieColumns() {
    const classes = ['col-sm-2 col-sm-offset-4 dieColumn', 'col-sm-2 dieColumn', 'col-sm-2 dieColumn']
    return this.state.diecolumns.map((name, i) => (
      <DieColumns _handleDieClick={this._handleDieClick.bind(this)} dice={this.state.dice} key={name} name={name} id={i} className={classes[i]}/>
    ));
  }

  _handleDieClick(die) {
    const dieId = die.props.id
    const dice = this.state.dice
    const place = dice[dieId].dieColumn
    switch (place) {
      case 1:
        dice[dieId].dieColumn = 2
        this.setState({dice})
        break;
      case 2:
        dice[dieId].dieColumn = 3
        this.setState({dice})
        break;
      case 3:
        dice[dieId].dieColumn = 1
        this.setState({dice})
        break;
      default:
        break;

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this._renderDieColumns()}
        </div>
        <div className="row">
          {this._renderColumns()}
        </div>
      </div>
    )
  }

}
