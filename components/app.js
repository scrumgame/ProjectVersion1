import React, { Component } from 'react';
import FrontPage from './FrontPage'
import Game from './Game'
import Navbar from './Navbar'
import Modals from './Modals'
import RollButton from './RollButton'
import RetroButton from './RetroButton'
import DieColumns from './DieColumns'
import DiceSum from './DiceSum'
import Column from './Column'
import Card from './Card'
import DefectCards from './resources/DefectCards'
import MaintenanceCards from './resources/MaintenanceCards'
import ActionCards from './resources/ActionCards'
import MultipleChoiceCards from './resources/MultipleChoiceCards'
import axios from 'axios'
import update from 'immutability-helper';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamname:
        {value: undefined},

      newgame:
        {value: false},

      customgame:
        {value: false},

      validation:
        {value: ''},

      admin: [
        {value: false},
        {username: undefined},
        {password: undefined}
      ],

      navbar:
        {value: false},

      slidevalue: 60,

      showModal:
        {open: false, type: undefined},

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

    }
    this._slideState = this._slideState.bind(this)
  }

  componentDidUpdate() {
    const cards = this.state.cards

    cards.map((el) => {
      axios({
        method: 'put',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/cards',
        data: {
          team: this.state.teamname.value,
          card: el
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(function(response) {
        //(response);
      })
      .catch(function(error) {
        //(error);
      })
    })
  }

  /**********************************************************************/
  /*                           FRONTPAGE                                */
  /**********************************************************************/

  _slideState(slidevalue) {
    this.setState({
      slidevalue: slidevalue
    })
  }

  _validationState(event) {
    this.setState({
      validation: {value: event.target.value}
    })
  }

  _getValidationState() {
      const balle = this.state.validation.value
      const length = balle.length
      if (length > 20) return 'success'
      else if (length > 10) return 'warning'
      else if (length > 0) return 'error'
  }

  _customGame() {
    return this.setState({
      customgame: {value: true}
    })
  }

  _login(username, password) {
    var that = this
    const admin = this.state.admin

    axios({
      method: 'GET',
      url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/admin',
      data: {
        username: username,
        password: password
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response) {
      if (username == response.data.admin[0].username && password == response.data.admin[0].password ) {
        that.setState({
        admin: {value: true}
        })
      }
    })
    .catch(function(error) {
      //(error)
    })

  }

  _quickPlay(that) {
    axios({
        method: 'post',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score',
        data: {
          team: this.state.teamname.value
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response) {
        //(response);
    })
    .catch(function(error) {
        //(error);
    });

    axios({
      method: 'post',
      url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/game',
      data: {
        team: this.state.teamname.value
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })

    this.setState({
      newgame: {value: true}
    })
  }

  _gameNav() {
    return this.setState({
      navbar: {value: true}
    })
  }

  _closeModal() {
    return this.setState({
      showModal: {open: false}
    });
  }

  _closeRetroModal() {
    if(this.state.validation.value.length >= 20) {
      return this.setState({
        showModal: {open: false}
      });
    }
  }

  _openModal(type) {
    return this.setState({
      showModal: {open: true, type: type}
    });
  }

  _saveTeamName(event) {
    return this.setState({
      teamname: {value: event.target.value}
    });
  }

  _startGame() {
    if (this.state.newgame.value == true) {
      return [
        <Navbar key={1} _openModal={this._openModal.bind(this)} navbar={this.state.navbar} _gameNav={this._gameNav.bind(this)} teamname={this.state.teamname}/>,
        <Game
        key={2}
        _openModal={this._openModal.bind(this)}
        _tickDay={this._tickDay.bind(this)}
        _renderRollOrRetroButton={this._renderRollOrRetroButton.bind(this)}
        _renderDieColumns={this._renderDieColumns.bind(this)}
        _renderSumColumns={this._renderSumColumns.bind(this)}
        _renderColumns={this._renderColumns.bind(this)}
        _pushCardsIntoState={this._pushCardsIntoState.bind(this)}
        _createDbCards={this._createDbCards.bind(this)}
        releaseplan={this.state.releaseplan}
        releaseplandays={this.state.releaseplandays}
        slidevalue={this.state.slidevalue}
        />
      ]
    } else {
      return [
        <Navbar key={1} _openModal={this._openModal.bind(this)} navbar={this.state.navbar} teamname={this.state.teamname}/>,

        <FrontPage key={2}slidevalue={this.state.slidevalue} admin={this.state.admin} customgame={this.state.customgame} _customGame={this._customGame.bind(this)} _slideState={this._getState}
        _slideState={this._slideState} _quickPlay={this._quickPlay.bind(this)} _saveTeamName={this._saveTeamName.bind(this)}
        _gameNav={this._gameNav.bind(this)}
        _login={this._login.bind(this)}/>,
      ]
    }
  }

  /**********************************************************************/
  /*                               GAME                                 */
  /**********************************************************************/
  /**********************************************************************/
  /*                               CARDS                                */
  /**********************************************************************/

  _pushCardsIntoState(cards) {
    this.setState({
     cards: this.state.cards.concat(cards, ActionCards, DefectCards, MaintenanceCards, MultipleChoiceCards)
   })
  }

  _createDbCards() {
    this.state.cards.map(el => {
      axios({
        method: 'post',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/cards',
        data: {
          team: this.state.teamname.value,
          card: el
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(function(response) {
        //(response);
      })
      .catch(function(error) {
        //(error);
      });
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
    //(this, card)
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
      if (buttontype == 'transfer') {
        el.position = (el.position == 1) ? 3 : 1
        return this.setState({dice})
      } else if (buttontype == 'chevron-left' && el.position == 2 || buttontype == 'chevron-left' && el.position == 3) {
        el.position--
        return this.setState({dice})
      } else if (buttontype == 'chevron-right' && el.position == 1 || buttontype == 'chevron-right' && el.position == 2) {
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
      return <DiceSum key={i} className={classes[i]} value={el.value} dice={numberDie.length*6} />
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
    const columns = this.state.columns

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
          axios({
              method: 'put',
              url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score',
              data: {
                cash: columns[4].cash,
                sprint: releaseplan.sprint,
                team: this.state.teamname.value
              },
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
          .then(function(response) {
              //(response);
          })
          .catch(function(error) {
              //(error);
          });

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
      return <RetroButton _handleRetrospective={this._handleRetrospective.bind(this)} className="RollButtonReady col-sm-1" />
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
    this._openModal(that, type)
    return newState
  }

  /**********************************************************************/
  /*                           RENDERFUNCTION                           */
  /**********************************************************************/

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this._startGame()}
          <Modals showModal={this.state.showModal} _validationState={this._validationState.bind(this)}
          _getValidationState={this._getValidationState.bind(this)}
          _closeModal={this._closeModal.bind(this)}
          _closeRetroModal={this._closeRetroModal.bind(this)}  />
        </div>
      </div>
    );
  }
}
