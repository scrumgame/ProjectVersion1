import React, { Component } from 'react'
import update from 'immutability-helper'
import Column from './Column'
import Card from './Card'
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
      cards:
        [],

      columns:
        [
        {name: 'Controls'},
        {name: 'Backlog'},
        {name: 'Analysis'},
        {name: 'Development'},
        {name: 'Testing'},
        {name: 'Done', cash: 0}
        ],

      dice:
        [
        {position: 1, id: 0, value: 1, type: 'Analysis'},
        {position: 2, id: 1, value: 1, type: 'Development'},
        {position: 2, id: 2, value: 1, type: 'Development'},
        {position: 2, id: 3, value: 1, type: 'Development'},
        {position: 2, id: 4, value: 1, type: 'Development'},
        {position: 3, id: 5, value: 1, type: 'Testing'}
        ],

      dicesum:
        [
        {position: 1, value: 0},
        {position: 2, value: 0},
        {position: 3, value: 0}
        ]
    };
  }

  componentDidMount() {
    this._generateCards()
  }

/**********************************************************************/
/*                               CARDS                                */
/**********************************************************************/

  _generateCards() {
    const cards = [];

    for (var i = 0; i < 60; i++) {
      const cashValues = [50, 100, 150, 200, 250, 300, 350, 400, 450];
      const a          = Math.floor((Math.random() * 10) + 1);
      const d          = Math.floor((Math.random() * 10) + 1);
      const t          = Math.floor((Math.random() * 10) + 1);
      const cash       = cashValues[Math.floor(Math.random() * cashValues.length)];
      const id         = i;

      const card = {
        type    : 'US',
        cash    : cash,
        a       : a,
        d       : d,
        t       : t,
        id      : i,
        position: 1,
        movable: true
      }
      cards.push(card);
    }
    this.setState({
      cards: this.state.cards.concat(cards, ActionCards, DevelopmentCards, MaintenanceCards, MultipleChoiceCards)
    })
  }

  _handleCardClick(card) {
    const columns = this.state.columns
    const cards = this.state.cards
    const cardId = card.props.id
    const pressedCard = cards[cardId]

    switch (pressedCard.position) {
      case 0:
      case 1:
        pressedCard.movable = true
        break;
      case 2:
        if (pressedCard.a == 0) pressedCard.movable = true
        break;
      case 3:
        if (pressedCard.d == 0) pressedCard.movable = true
        break;
      case 4:
        if (pressedCard.t == 0) pressedCard.movable = true
        break;
      default:
        break;
    }

    if(pressedCard.movable == true) {

      if (pressedCard.position !== 5) {
        pressedCard.position++
        pressedCard.movable = false

        if (pressedCard.position == 5) {
          columns[5].cash += pressedCard.cash
          return this.setState({columns})
        }

        return this.setState({cards})
      }
    }
  }

/**********************************************************************/
/*                           CARDCOLUMNS                              */
/**********************************************************************/

  _renderColumns() {
    return this.state.columns.map((el, i) => (
      <Column _handleCardClick={this._handleCardClick.bind(this)} cards={this.state.cards} key={el.name} name={el.name} id={i} cash={el.cash}/>
    ));
  }

/**********************************************************************/
/*                                DICE                                */
/**********************************************************************/

  _renderDieColumns() {
    const classes = ['col-sm-offset-4', '', '']
    const dieColumns = [1, 2, 3]
    return dieColumns.map((el, i) => (
      <DieColumns _handleDieClick={this._handleDieClick.bind(this)} dice={this.state.dice} key={el} name={el} id={el} className={classes[i]}/>
    ));
  }

  _handleDieClick(die, button) {
    const buttontype = button.props.type
    const dieId = die.props.id
    const dice = this.state.dice
    const place = dice[dieId].position
    const type = dice[dieId].type

    if (buttontype == 'M') {
      dice[dieId].position = (place == 1) ? 3 : 1
      return this.setState({dice})
    } else if (buttontype == 'L' && place == 2 || buttontype == 'L' && place == 3) {
      dice[dieId].position = place -1
      return this.setState({dice})
    } else if (buttontype == 'R' && place == 1 || buttontype == 'R' && place == 2) {
      dice[dieId].position = place +1
      return this.setState({dice})
    }
  }

  _handleDieRoll() {
    const dice = this.state.dice
    dice.map((el) => (
      el.value = Math.floor((Math.random() * 6) + 1)
    ))
    this.setState({dice})
    this._summarizeDiceRoll()
  }

  _summarizeDiceRoll() {
    const dicesum = this.state.dicesum
    const dice = this.state.dice

    dicesum.map(sum => {
      sum.value = dice
        .filter((el) => el.position == sum.position)
        .map(el => el.value)
        .reduce((total, value) => value + total, 0)
    })

    this.setState({dicesum})
    this._checkValues()
  }

  _checkValues() {
    const dicesum = this.state.dicesum
    const cards = this.state.cards

    dicesum.map(dice => {
      cards.filter(el => el.position == 2).map(el => {
        while (el.a > 0 && dice.value > 0 && dice.position == 1) {
          el.a--
          dice.value--
        }
      })
      cards.filter(el => el.position == 3).map(el => {
        while (el.d > 0 && dice.value > 0 && dice.position == 2) {
          el.d--
          dice.value--
        }
      })
      cards.filter(el => el.position == 4).map(el => {
        while (el.t > 0 && dice.value > 0 && dice.position == 3) {
          el.t--
          dice.value--
        }
      })
    })
  }

/**********************************************************************/
/*                           RENDERFUNCTION                           */
/**********************************************************************/

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
