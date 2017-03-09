import React, { Component } from 'react'
import Column from './Column'
import Card from './Card'
import DieColumns from './DieColumns'
import DiceSum from './DiceSum'
import RollButton from './RollButton'
import RetroButton from './RetroButton'
import ReleasePlanWeek from './ReleasePlanWeek'
import DefectCards from './resources/DefectCards'
import MaintenanceCards from './resources/MaintenanceCards'
import ActionCards from './resources/ActionCards'
import MultipleChoiceCards from './resources/MultipleChoiceCards'
import update from 'immutability-helper';

export default class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],

      columns: [
        {name: 'Backlog'},
        {name: 'Analysis'},
        {name: 'Development'},
        {name: 'Testing'},
        {name: 'Done', cash: 0}
      ],

      dice: [
        {position: 1, id: 0, value: 1, type: 'Analysis'},
        {position: 2, id: 1, value: 1, type: 'Development'},
        {position: 2, id: 2, value: 1, type: 'Development'},
        {position: 2, id: 3, value: 1, type: 'Development'},
        {position: 2, id: 4, value: 1, type: 'Development'},
        {position: 3, id: 5, value: 1, type: 'Testing'}
      ],

      dicesum: [
        {position: 1, value: 0},
        {position: 2, value: 0},
        {position: 3, value: 0}
      ],

      dicerollbutton: {
        value: 1
      },

      releaseplan: {
        sprint: 1,
        day: 1
      },

      releaseplandays: [
        {name: "Mon", done: 2},
        {name: "Tue", done: 1},
        {name: "Wed", done: 1},
        {name: "Thu", done: 1},
        {name: "Fri", done: 1}
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

    for (var i = 0; i < this.props.slidevalue; i++) {
      const cashValues = [50, 100, 150, 200, 250, 300, 350, 400, 450];
      const a          = Math.floor((Math.random() * 10) + 1);
      const d          = Math.floor((Math.random() * 10) + 1);
      const t          = Math.floor((Math.random() * 10) + 1);
      const cash       = cashValues[Math.floor(Math.random() * cashValues.length)];
      const id         = i;

      const card = {
        type       : 'US',
        number     : i+1,
        cash       : cash,
        a          : a,
        d          : d,
        t          : t,
        id         : i,
        position   : 0,
        priority   : 0,
        timeclicked: 0,
        movable    : true
      }
      cards.push(card);
    }

    this.setState({
      cards: this.state.cards.concat(cards, ActionCards, DefectCards, MaintenanceCards, MultipleChoiceCards)
    })
  }

  _handlePrioClick(card) {
    const cards = this.state.cards
    cards.filter(el => el.id == card.props.id).map(el => {
      el.priority++
      return this.setState({cards})
    })
  }

  _handleCardClick(card) {
    const date = new Date()
    const time = date.getTime()
    const columns = this.state.columns
    const cards = this.state.cards

    if (card.props.index == 0) {
      cards.filter((el) => el.id == card.props.id).map(el => {

        switch (el.position) {
          case 0:
          el.movable = true
          el.timeclicked = time
          break;

          case 1:
          if (el.a == 0) {
            el.movable = true
            el.timeclicked = time
          }
          break;

          case 2:
          if (el.d == 0) {
            el.movable = true
            el.timeclicked = time
          }
          break;

          case 3:
          if (el.t == 0) {
            el.movable = true
            el.timeclicked = time
          }
          break;

          default:
          break;
        }

        if(el.movable == true) {

          if (el.position !== 4) {
            el.position++
            el.movable = false

            if (el.position == 4 && el.cash) {
              columns[4].cash += el.cash
              return this.setState({columns})
            }

            return this.setState({cards})
          }
        }
      })
    }
  }

  /**********************************************************************/
  /*                           CARDCOLUMNS                              */
  /**********************************************************************/

  _renderColumns() {
    const classes = ['col-sm-offset-1', '', '', '', '']
    return this.state.columns.map((el, i) => (
      <Column _handleCardClick={this._handleCardClick.bind(this)} _handlePrioClick={this._handlePrioClick.bind(this)} cards={this.state.cards} key={el.name} name={el.name} id={i} cash={el.cash} className={classes[i]}/>
    ));
  }

  /**********************************************************************/
  /*                                DICE                                */
  /**********************************************************************/

  _renderDieColumns() {
    const classes = ['col-sm-offset-3', '', '']
    const dieColumns = [1, 2, 3]
    return dieColumns.map((el, i) => (
      <DieColumns _handleDieClick={this._handleDieClick.bind(this)} dice={this.state.dice} key={el} name={el} id={el} className={classes[i]}/>
    ));
  }

  _handleDieClick(die, button) {
    const buttontype = button.props.type
    const dice = this.state.dice

    dice.filter(el => el.id == die.props.id).map(el => {
      if (buttontype == 'M') {
        el.position = (el.position == 1) ? 3 : 1
        return this.setState({dice})
      } else if (buttontype == 'L' && el.position == 2 || buttontype == 'L' && el.position == 3) {
        el.position--
        return this.setState({dice})
      } else if (buttontype == 'R' && el.position == 1 || buttontype == 'R' && el.position == 2) {
        el.position++
        return this.setState({dice})
      }
    })
  }

  _handleDieRoll() {
    const dice = this.state.dice
    const dicebutton = this.state.dicerollbutton

    if (dicebutton.value == this.state.releaseplan.day) {
      dice.map((el) => (
        el.value = Math.floor((Math.random() * 6) + 1)
      ))
      this.setState({dice})
      if (dicebutton.value == 5) {
        this.setState({
          dicerollbutton: update(dicebutton, {value: {$set: 1}})
        })
      } else {
        this.setState({
          dicerollbutton: update(dicebutton, {value: {$set: dicebutton.value+1}})
        })
      }
      this._summarizeDiceRoll()
    }
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
      let dicevalue = dice.value
      cards.filter(el => el.position == dice.position)
           .sort((a, b) => b.priority - a.priority)
           .map(el => {
             if (dice.position == 1) {
               while (el.a > 0 && dicevalue > 0 && dice.position == el.position) {
                 el.a--
                 dicevalue--
               }
             } else if (dice.position == 2) {
                while (el.d > 0 && dicevalue > 0 && dice.position == el.position) {
                  el.d--
                  dicevalue--
                }
              } else if (dice.position == 3) {
                 while (el.t > 0 && dicevalue > 0 && dice.position == el.position) {
                   el.t--
                   dicevalue--
                 }
               }

           })

    })
  }

  _renderSumColumns() {
    const classes = ['col-sm-offset-3', '', '']
    const dicesum = this.state.dicesum
    const dice = this.state.dice

    const diceSumValue = dicesum.map((el, i) => {
      const numberDie = dice.filter(elem => elem.position == el.position)
                            .map(elem => elem)
      return <DiceSum className={classes[i]} value={el.value} dice={numberDie.length*6} />
    })

    return diceSumValue

  }
  /**********************************************************************/
  /*                           RELEASEPLAN                              */
  /**********************************************************************/

  // When card is done, tick off the day to continue the game
  _tickDay(day) {
    const releaseplan = this.state.releaseplan
    const releaseplandays = this.state.releaseplandays
    const dicerollbutton = this.state.dicerollbutton

    switch (day.props.name) {
      case 'Mon':
        if (releaseplan.day == 1 && dicerollbutton.value == 2) {
          return this.setState({
              releaseplan: update(releaseplan, {day: {$set: 2}}),
              releaseplandays: update(releaseplandays, {0: {done: {$set: 3}}, 1: {done: {$set: 2}}})
            })
        }
        break
      case 'Tue':
        if (releaseplan.day == 2 && dicerollbutton.value == 3) {
          return this.setState({
            releaseplan: update(releaseplan, {day: {$set: 3}}),
            releaseplandays: update(releaseplandays, {1: {done: {$set: 3}}, 2: {done: {$set: 2}}})
          })
        }
        break
      case 'Wed':
        if (releaseplan.day == 3 && dicerollbutton.value == 4) {
          return this.setState({
            releaseplan: update(releaseplan, {day: {$set: 4}}),
            releaseplandays: update(releaseplandays, {2: {done: {$set: 3}}, 3: {done: {$set: 2}}})
          })
        }
        break
      case 'Thu':
        if (releaseplan.day == 4 && dicerollbutton.value == 5) {
          return this.setState({
            releaseplan: update(releaseplan, {day: {$set: 5}}),
            releaseplandays: update(releaseplandays, {3: {done: {$set: 3}}, 4: {done: {$set: 2}}})
          })
        }
        break
      case 'Fri':
        if (releaseplan.day == 5 && dicerollbutton.value == 1) {
          return this.setState({
            releaseplandays: update(releaseplandays, {4: {done: {$set: 3}}})
          })
        }
        break
      default:
        break
    }
  }

  _renderRollOrRetroButton() {
    const releaseplandays = this.state.releaseplandays
    const releaseplan = this.state.releaseplan
    const dicerollbutton = this.state.dicerollbutton

    if (releaseplandays[4].done == 3) {
      return <RetroButton _handleRetrospective={this._handleRetrospective.bind(this)} className="RollButtonReady col-sm-1"/>
    } else if (releaseplan.day !== dicerollbutton.value) {
      return <RollButton _handleDieRoll={this._handleDieRoll.bind(this)} className="RollButton col-sm-1"/>
    } else {
      return <RollButton _handleDieRoll={this._handleDieRoll.bind(this)} className="RollButtonReady col-sm-1"/>
    }

  }

  _handleRetrospective(that, type) {
    const releaseplan = this.state.releaseplan
    const releaseplandays = this.state.releaseplandays

    releaseplandays.map((el, i) => {
      if (i == 0) {
        el.done = 2
      } else {
        el.done = 1
      }
    })
    this.setState({releaseplandays})

    const newState = this.setState({
            releaseplan: update(releaseplan, {$merge: {day: 1, sprint: releaseplan.sprint+1}})
          })
    this.props._openModal(that, type)
    return newState
  }

  /**********************************************************************/
  /*                           RENDERFUNCTION                           */
  /**********************************************************************/

  render() {
    return (
      <div className="container">
        <div className="row">
          <ReleasePlanWeek releaseplan={this.state.releaseplan} releaseplandays={this.state.releaseplandays} _tickDay={this._tickDay.bind(this)}/>
          {this._renderRollOrRetroButton()}
        </div>
        <div className="row">
          {this._renderDieColumns()}
        </div>
        <div className="row">
          {this._renderSumColumns()}
        </div>
        <div className="row">
          {this._renderColumns()}
        </div>
      </div>
    )
  }

}
