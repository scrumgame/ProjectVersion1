import React, { Component } from 'react'
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
import GameOver from './GameOver'
import DefectCards from './resources/DefectCards'
import MaintenanceCards from './resources/MaintenanceCards'
import ActionCards from './resources/ActionCards'
import MultipleChoiceCards from './resources/MultipleChoiceCards'
import axios from 'axios'
import update from 'immutability-helper'

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

      retrospectiveinput:
        {value: ''},

      admin:
        {value: false},

      loginmessage:
        {text: ''},

      navbar:
      //False = frontpage, true = ingame...ingame = releaseplan added.
        {value: false},

      slidevalue: 60,

      showModal:
        {open: false, type: undefined},

      cards: [],

      actioncard:
        {
          id: 0,
          text: 'You have no current active actioncard.',
          number: 0,
          card: 0,
          clicked: false
        },

      columns: [
        {name: 'Backlog'},
        {name: 'Analysis'},
        {name: 'Development'},
        {name: 'Testing'},
        {name: 'Done', cash: 0}
      ],

      moneyearned: [
      //This is the total cash earned for each sprint.
        {cash: 0}, //Sprint 1
        {cash: 0}, //Sprint 2
        {cash: 0}, //Sprint 3
        {cash: 0}, //Sprint 4
        {cash: 0}, //Sprint 5
        {cash: 0}, //Sprint 6
        {cash: 0}, //Sprint 7
        {cash: 0}  //Sprint 8
      ],

      totalscore:
        // totalscore of the game that was played.
        {value: 0},

      dice: [
        {position: 1, id: 0, value: 1, type: 'Analysis', timegone: 0},
        {position: 2, id: 1, value: 1, type: 'Development', timegone: 0},
        {position: 2, id: 2, value: 1, type: 'Development', timegone: 0},
        {position: 2, id: 3, value: 1, type: 'Development', timegone: 0},
        {position: 2, id: 4, value: 1, type: 'Development', timegone: 0},
        {position: 3, id: 5, value: 1, type: 'Testing', timegone: 0}
      ],

      dicesum: [
        {position: 1, value: 0},
        {position: 2, value: 0},
        {position: 3, value: 0}
      ],

      dicerollbutton: {
        //value goes up each day and at end of week(sprint) it changes into Retrospective button
        value: 1
      },

      releaseplan: {
        sprint: 1,
        day: 1
      },

      releaseplandays: [
      // done 1 = day still to come, done 2 = current day, done 3 = day is over
        {name: "Mon", done: 2},
        {name: "Tue", done: 1},
        {name: "Wed", done: 1},
        {name: "Thu", done: 1},
        {name: "Fri", done: 1}
      ],

      retrospective: [
      //After each sprint text is filled with team's retrospective thoughts.
      //Each object represent a single sprint - so eight in total.
        {text: ""}, //Sprint 1
        {text: ""}, //Sprint 2
        {text: ""}, //Sprint 3
        {text: ""}, //Sprint 4
        {text: ""}, //Sprint 5
        {text: ""}, //Sprint 6
        {text: ""}, //Sprint 7
        {text: ""}  //Sprint 8
      ],

      highscore: [
        {teamname: "", total: 0},
        {teamname: "", total: 0},
        {teamname: "", total: 0},
        {teamname: "", total: 0},
        {teamname: "", total: 0},
        {teamname: "", total: 0},
        {teamname: "", total: 0},
        {teamname: "", total: 0}
      ],

      highscorecurrentteam:
        {teamname: "", total: 0, rank: 0}
    }
  }

  /**********************************************************************/
  /*                           FRONTPAGE                                */
  /**********************************************************************/

  _slideState(slidevalue) {
    this.setState({
      slidevalue: slidevalue
    })
  }

  _retrospectiveInputState(event) {
    this.setState({
      retrospectiveinput: {value: event.target.value}
    })
  }

  //return appropriate validation css class to bootstrap form in retrospective modal.
  _getRetrospectiveInputState() {
      const retrospectiveinput = this.state.retrospectiveinput.value
      const length = retrospectiveinput.length
      if (length > 7) return 'success'
      else if (length > 3) return 'warning'
      else if (length > 0) return 'error'
  }

  _customGame() {
    return this.setState({
      customgame: {value: true}
    })
  }

  _restart() {
    return location.reload()
  }

  //check with API if username & password are correct
  _login(username, password) {
    const that = this
    const admin = this.state.admin

    axios.get('http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/admin/1/'+username+'/'+password)
    .then(function(response) {
      if (response.data.admin) {
        that.setState({
          admin: {value: true}
        })
      } else {
        that.setState({
          loginmessage: {text: 'Wrong username or password'}
        })
      }
    })

  }

  //Starting a new game and sets teamname
  _quickPlay() {
    axios({
        method: 'post',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score',
        data: {
          team: this.state.teamname.value
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })

    axios({
      method: 'post',
      url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/game',
      data: {
        team: this.state.teamname.value
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
    })
  }

  //when closing retrospective modal it send all info to API.
  //it also "resets" the week/starts a new sprint week.
  _closeRetroModal() {
    const name = this.state.teamname.value
    const releaseplan = this.state.releaseplan
    const cards = this.state.cards
    const columns = this.state.columns
    const that = this

    if(this.state.retrospectiveinput.value.length >= 7) {
      axios({
        method: 'put',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/game',
        data: {
          team: this.state.teamname.value,
          retrospective: this.state.retrospectiveinput.value,
          releaseplan: this.state.releaseplan
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(function(response) {
        const retrospective = that.state.retrospective
        const i = that.state.releaseplan.sprint-1

        if(that.state.retrospectiveinput.value !== '') {
          that.setState({
            retrospectiveinput: {value: ''}
          })
        }

        axios.get('http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/game/'+name+'_game/'+i)
        .then(function(response) {
          that.setState({
            retrospective: update(retrospective, {[i-1]: {text: {$set: response.data.retro[0].retrospective}}})
          })
        })
      })

      cards.filter(el => el.position == 4 && el.type == 'US')
           .map(elem => elem.done = true)
      this.setState({cards})

      this._sendTotalScore() //insert totalscore into DB

      this.setState({
        releaseplan: update(releaseplan, {$merge: {day: 1, sprint: releaseplan.sprint+1}}),
        columns: update(columns, {4: {cash: {$set: 0}}}),
        showModal: {open: false}
      })
    }
  }

  _openModal(type) {
    return this.setState({
      showModal: {open: true, type: type}
    })
  }

  _saveTeamName(event) {
    return this.setState({
      teamname: {value: event.target.value}
    })
  }

  //Returns the appropriate game component based on current game state.
  _renderGameState() {
    if (this.state.newgame.value == true && this.state.releaseplan.sprint !== 9) {
      return [
        <Navbar
          key={1}
          _openModal={this._openModal.bind(this)}
          navbar={this.state.navbar}
          _gameNav={this._gameNav.bind(this)}
          teamname={this.state.teamname}
          _restart={this._restart.bind(this)}
        />,
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
    } else if (this.state.releaseplan.sprint == 9 && this.state.newgame.value == true) {
      return [
        <Navbar
          key={1}
          _openModal={this._openModal.bind(this)}
          navbar={this.state.navbar}
          teamname={this.state.teamname}
        />,
        <GameOver
          key={2}
          _getTopTenHS={this._getTopTenHS.bind(this)}
          highscore={this.state.highscore}
          highscorecurrentteam={this.state.highscorecurrentteam}
          teamname={this.state.teamname.value}
        />
            ]
    } else {
      return [
        <Navbar
          key={1}
          _openModal={this._openModal.bind(this)}
          navbar={this.state.navbar}
          teamname={this.state.teamname}
        />,
        <FrontPage
          key={2}
          slidevalue={this.state.slidevalue}
          admin={this.state.admin}
          loginmessage={this.state.loginmessage}
          customgame={this.state.customgame}
          _customGame={this._customGame.bind(this)}
          _slideState={this._slideState.bind(this)}
          _quickPlay={this._quickPlay.bind(this)}
          _saveTeamName={this._saveTeamName.bind(this)}
          _gameNav={this._gameNav.bind(this)}
          _login={this._login.bind(this)}
        />
      ]
    }
  }

  /**********************************************************************/
  /*                               GAME                                 */
  /**********************************************************************/
  /**********************************************************************/
  /*                             ACTIONCARDS                            */
  /**********************************************************************/
  _actionCardAxios(cardid) {
    const name = this.state.teamname.value
    const that = this
    const modalTypeAction = 'Action'

    axios.get('http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/cards/'+name+'_cards/'+cardid)
    .then(function(response) {
      const actionText = response.data.action[0].description
      const id = Number(response.data.action[0].cardnumber)

      that.setState({
        actioncard: update(that.state.actioncard, {$merge: {text: actionText, id: id}})
      })

      return that._openModal(modalTypeAction)
    })
  }

  _invokeActionCard() {
    const releaseplan = this.state.releaseplan

    if (releaseplan.sprint == 1 && releaseplan.day == 2) {
      this._actionCardAxios(121)
    } else if (releaseplan.sprint == 4 && releaseplan.day == 3) {
      this._actionCardAxios(126)
    } else if (releaseplan.sprint == 8 && releaseplan.day == 2) {
      this._actionCardAxios(125)
    }
  }

  _actionCardDieRoll() {
    const value = Math.floor((Math.random() * 6) + 1)

    this.setState({
      actioncard: update(this.state.actioncard, {$merge: {number: value, clicked: true}})
    })

    if (this.state.actioncard.id == 121) {
      this.setState({
        dice: update(this.state.dice, {1: {timegone: {$set: value}}})
      })
    } else if (this.state.actioncard.id == 126) {
      this.setState({
        dice: update(this.state.dice, {5: {timegone: {$set: value}}})
      })
    }
  }

  _actionCardSaveSprint() {
    const sprint = this.state.releaseplan.sprint
    let indexArray = []

    const test = this.state.cards.filter((elem, i) => {
      if (elem.type == 'D' && elem.position == 0) {
        indexArray.push(i)
        return elem
      }
    }).slice(0, 1)

    const indexOfArray = indexArray.slice(0, 1)
    const indexOfCard = indexOfArray[0]

    this.setState({
      actioncard: update(this.state.actioncard, {$merge: {number: sprint, card: indexOfCard, clicked: true}}),
      cards: update(this.state.cards, {[indexOfCard]: {cash: {$set: 400}}})
    })
  }

  _actionCardSwitch() {
    switch (this.state.actioncard.id) {
      case 121:
        this._developerRecovery()

        break
      case 125:
        this._criticalDefect()

        break
      case 126:
        this._testerRecovery()

        break
      default:
        break
    }
  }

  _developerRecovery() {
    if (this.state.dice[1].timegone > 0) {
      this.setState({
        actioncard: update(this.state.actioncard, {number: {$set: this.state.actioncard.number-1}}),
        dice: update(this.state.dice, {1: {timegone: {$set: this.state.dice[1].timegone-1}}})
      })
    }
    if (this.state.actioncard.number == 1 && this.state.actioncard.clicked == true) {
      this.setState({
        actioncard: update(this.state.actioncard, {$merge: {id: 0, text: "You have no current active actioncard.", number: 0, card: 0, clicked: false}})
      })
    }
  }

  _testerRecovery() {
    if (this.state.dice[5].timegone > 0) {
      this.setState({
        actioncard: update(this.state.actioncard, {number: {$set: this.state.actioncard.number-1}}),
        dice: update(this.state.dice, {5: {timegone: {$set: this.state.dice[5].timegone-1}}})
      })
    }
    if (this.state.actioncard.number == 1 && this.state.actioncard.clicked == true) {
      this.setState({
        actioncard: update(this.state.actioncard, {$merge: {id: 0, text: "You have no current active actioncard.", number: 0, card: 0, clicked: false}})
      })
    }
  }

  _criticalDefect() {
    const sprint = this.state.releaseplan.sprint

    if (this.state.actioncard.number < sprint) {
      this.setState({
        cards: update(this.state.cards, {[this.state.actioncard.card]: {cash: {$set: 0}}}),
        actioncard: update(this.state.actioncard, {$merge: {id: 0, text: "You have no current active actioncard.", number: 0, card: 0, clicked: false}})
      })
    }
  }
  /**********************************************************************/
  /*                               CARDS                                */
  /**********************************************************************/

  _pushCardsIntoState(cards) {
    this.setState({
     cards: this.state.cards.concat(cards, ActionCards, DefectCards, MaintenanceCards, MultipleChoiceCards)
   })
  }

  //post all cards to API.
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
    })
  }

  //Raise priority on single card when clicked on prio button.
  _handlePrioClick(card) {
    const cards = this.state.cards
    cards.filter(el => el.id == card.props.id).map(el => {
      el.priority++
      return this.setState({cards})
    })
  }

  //Check if A, D or T is zero and then card will be moved to the next column.
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
          break

          case 1:
          if (el.a == 0) {
            el.movable = true
            el.timeclicked = time
          }
          break

          case 2:
          if (el.d == 0) {
            el.movable = true
            el.timeclicked = time
          }
          break

          case 3:
          if (el.t == 0) {
            el.movable = true
            el.timeclicked = time
          }
          break

          default:
          break
        }

        if(el.movable == true) {

          if (el.position !== 4) {
            el.position++
            el.movable = false
            this.setState({cards})

            axios({
              method: 'put',
              url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/cards',
              data: {
                team: this.state.teamname.value,
                card: el
              },
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })

            if (el.position == 4 && el.cash) {
              columns[4].cash += el.cash
              return this.setState({columns})
            }
          }
        }
      })
    }
  }

  /**********************************************************************/
  /*                           CARDCOLUMNS                              */
  /**********************************************************************/

  //render out all columns/render out scrum board
  _renderColumns() {
    const classes = ['col-sm-offset-1', '', '', '', '']
    return this.state.columns.map((el, i) => (
      <Column
        _handleCardClick={this._handleCardClick.bind(this)}
        _handlePrioClick={this._handlePrioClick.bind(this)}
        cards={this.state.cards}
        key={el.name}
        name={el.name}
        id={i}
        cash={el.cash}
        className={classes[i]}
      />
    ))
  }

  /**********************************************************************/
  /*                                DICE                                */
  /**********************************************************************/

  _renderDieColumns() {
    const classes = ['col-sm-offset-3', '', '']
    const dieColumns = [1, 2, 3]
    return dieColumns.map((el, i) => (
      <DieColumns
        _handleDieClick={this._handleDieClick.bind(this)}
        dice={this.state.dice}
        key={el}
        name={el}
        id={el}
        className={classes[i]}/>
    ))
  }

  //check position of die and then moves accordingly,
  //based on what button was pushed( < , > or <> )
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

  // Function to roll the dice.
  _rollDice() {
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

  //sum of what you did roll for each column
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

  //card value - dice value for all coulmns and cards(in prio order)
  _checkValues() {
    const dicesum = this.state.dicesum
    const cards = this.state.cards

    dicesum.map(dice => {
      let dicevalue = dice.value
      cards.filter(el => el.position == dice.position)
           .sort((a,b) => {
             if (a.priority > 0 || b.priority > 0) {
               return b.priority - a.priority
             } else {
               return a.timeclicked - b.timeclicked
             }
           })
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

  //For all columns render a dice summarizing component
  _renderSumColumns() {
    const dicesum = this.state.dicesum
    const dice = this.state.dice

    const diceSumComponents = dicesum.map((el, i) => {
      const numberDie = dice.filter(elem => elem.position == el.position)
                            .map(elem => elem)
      return <DiceSum key={i} value={el.value} dice={numberDie.length*6} />
    })

    return diceSumComponents
  }

  /**********************************************************************/
  /*                           RELEASEPLAN                              */
  /**********************************************************************/

  //if "work"-button has been pressed then you can tick off the current day in sprint.
  //also sends info to API at end of sprint.
  _tickDay(day) {
    const releaseplan = this.state.releaseplan
    const releaseplandays = this.state.releaseplandays
    const dicerollbutton = this.state.dicerollbutton
    const columns = this.state.columns

    switch (day.props.name) {
      case 'Mon':
        if (releaseplan.day == 1 && dicerollbutton.value == 2) {


          this.setState({
            releaseplan: update(releaseplan, {day: {$set: 2}}),
            releaseplandays: update(releaseplandays, {0: {done: {$set: 3}}, 1: {done: {$set: 2}}})
          })
          this._invokeActionCard()
          this._actionCardSwitch()
        }
        break
      case 'Tue':
        if (releaseplan.day == 2 && dicerollbutton.value == 3) {


          this.setState({
            releaseplan: update(releaseplan, {day: {$set: 3}}),
            releaseplandays: update(releaseplandays, {1: {done: {$set: 3}}, 2: {done: {$set: 2}}})
          })
          this._invokeActionCard()
          this._actionCardSwitch()
        }
        break
      case 'Wed':
        if (releaseplan.day == 3 && dicerollbutton.value == 4) {


          this.setState({
            releaseplan: update(releaseplan, {day: {$set: 4}}),
            releaseplandays: update(releaseplandays, {2: {done: {$set: 3}}, 3: {done: {$set: 2}}})
          })
          this._invokeActionCard()
          this._actionCardSwitch()
        }
        break
      case 'Thu':
        if (releaseplan.day == 4 && dicerollbutton.value == 5) {


          this.setState({
            releaseplan: update(releaseplan, {day: {$set: 5}}),
            releaseplandays: update(releaseplandays, {3: {done: {$set: 3}}, 4: {done: {$set: 2}}})
          })
          this._invokeActionCard()
          this._actionCardSwitch()
        }
        break
      case 'Fri':
        if (releaseplan.day == 5 && dicerollbutton.value == 1) {
          this._invokeActionCard()
          this._actionCardSwitch()


          const that = this

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
            const moneyearned = that.state.moneyearned
            const name = that.state.teamname.value
            const sprint = that.state.releaseplan.sprint

            axios.get('http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score/'+name+'/'+sprint)
            .then(function(response) {

              that.setState({
                moneyearned: update(moneyearned, {[sprint-1]: {cash: {$set: response.data.money[0]}}})
              })
            })
          })

          this.setState({
            releaseplandays: update(releaseplandays, {4: {done: {$set: 3}}})
          })
        }
        break
      default:
        break
    }
  }

  //return "work"-button or "retrospective"-button component to render
  _renderRollOrRetroButton() {
    const releaseplandays = this.state.releaseplandays
    const releaseplan = this.state.releaseplan
    const dicerollbutton = this.state.dicerollbutton

    if (releaseplandays[4].done == 3) {
      return <RetroButton _handleRetrospective={this._handleRetrospective.bind(this)} className="RollButtonReady col-sm-1" />
    } else if (releaseplan.day !== dicerollbutton.value) {
      return <RollButton _rollDice={this._rollDice.bind(this)} className="RollButton col-sm-1"/>
    } else {
      return <RollButton _rollDice={this._rollDice.bind(this)} className="RollButtonReady col-sm-1"/>
    }

  }

  //reset state on days in current sprint calender and open retrospective modal
  _handleRetrospective(that, type) {
    const releaseplandays = this.state.releaseplandays

    releaseplandays.map((el, i) => {
      if (i == 0) {
        el.done = 2   // Set Monday to current day
      } else {
        el.done = 1   // Set the rest of the days of the week to upcoming days
      }
    })
    this.setState({releaseplandays})

    this._summarizeScore()
    this._openModal(that, type)
  }

  _summarizeScore() {
    let totalScore = 0
    this.state.moneyearned.map(el => {
      totalScore += el.cash
    })
    this.setState({totalscore: {value: totalScore}})
  }

  /**********************************************************************/
  /*                             HIGHSCORE                              */
  /**********************************************************************/
  _getTopTenHS() {
    const name = this.state.teamname.value
    const highscorecurrentteam = this.state.highscorecurrentteam

    axios.get('http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score/'+name)
    .then(response => {
      const newHighscore = response.data.totalTopTen.map((el, i) => {
        return {teamname: el.teamname, total: el.total}
      })
      this.setState({highscore: newHighscore})

      response.data.totalCurrentTeam.map((el, i) => {
        if (el.teamname == name) {
          this.setState({
            highscorecurrentteam: update(highscorecurrentteam, {$merge: {teamname: el.teamname, total: el.total, rank: i+1}})
          })
        }
      })
    })
  }

  _sendTotalScore() {
    axios({
        method: 'put',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score',
        data: {
          totalscore: this.state.totalscore.value,
          team: this.state.teamname.value
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
  }

  /**********************************************************************/
  /*                           RENDERFUNCTION                           */
  /**********************************************************************/

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this._renderGameState()}
          <Modals
            showModal={this.state.showModal}
            releaseplan={this.state.releaseplan}
            releaseplandays={this.state.releaseplandays}
            retrospective={this.state.retrospective}
            teamname={this.state.teamname}
            moneyearned={this.state.moneyearned}
            actioncard={this.state.actioncard}
            _actionCardDieRoll={this._actionCardDieRoll.bind(this)}
            _actionCardSaveSprint={this._actionCardSaveSprint.bind(this)}
            _retrospectiveInputState={this._retrospectiveInputState.bind(this)}
            _getRetrospectiveInputState={this._getRetrospectiveInputState.bind(this)}
            highscore={this.state.highscore}
            highscorecurrentteam={this.state.highscorecurrentteam}
            _getTopTenHS={this._getTopTenHS.bind(this)}
            _closeModal={this._closeModal.bind(this)}
            _closeRetroModal={this._closeRetroModal.bind(this)}
          />
        </div>
      </div>
    )
  }
}
