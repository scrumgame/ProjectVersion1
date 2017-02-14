import React, { Component } from 'react';
import _ from 'underscore'
import Column from './Column'
import DieColumns from './DieColumns'
import RollButton from './RollButton'
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
      dice:  [{dieColumn: 1, id: 0, value: 1},
              {dieColumn: 2, id: 1, value: 1},
              {dieColumn: 2, id: 2, value: 1},
              {dieColumn: 2, id: 3, value: 1},
              {dieColumn: 2, id: 4, value: 1},
              {dieColumn: 3, id: 5, value: 1}]
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
      <DieColumns _handleDieLeftClick={this._handleDieLeftClick.bind(this)} _handleDieRightClick={this._handleDieRightClick.bind(this)} dice={this.state.dice} key={name} name={name} id={i} className={classes[i]}/>
    ));
  }

  _handleDieLeftClick(die) {
    const dieId = die.props.id
    const dice = this.state.dice
    const place = dice[dieId].dieColumn
    if (place == 2 || place == 3) {
      dice[dieId].dieColumn = place -1
      return this.setState({dice})
    } else {
      dice[dieId].dieColumn = place +2
      return this.setState({dice})
    }
  }

  _handleDieRightClick(die) {
    const dieId = die.props.id
    const dice = this.state.dice
    const place = dice[dieId].dieColumn
    if (place == 1 || place == 2) {
      dice[dieId].dieColumn = place +1
      return this.setState({dice})
    } else {
      dice[dieId].dieColumn = place -2
      return this.setState({dice})
    }
  }

  _handleDieRoll() {
    const dice = this.state.dice
    dice.map((el) => (
      el.value = Math.floor((Math.random() * 6) + 1)
    ))
    this.setState({dice})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this._renderDieColumns()}
          <RollButton _handleDieRoll={this._handleDieRoll.bind(this)}/>
        </div>
        <div className="row">
          {this._renderColumns()}
        </div>
      </div>
    )
  }

}
