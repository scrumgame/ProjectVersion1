import React, { Component } from 'react';
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
      columns: [{name: 'Controls', cash: false},
                {name: 'Backlog', cash: false},
                {name: 'Analysis', cash: false},
                {name: 'Development', cash: false},
                {name: 'Testing', cash: false},
                {name: 'Done', cash: true}],
      cards: [],
      dice:  [{position: 1, id: 0, value: 1},
              {position: 2, id: 1, value: 1},
              {position: 2, id: 2, value: 1},
              {position: 2, id: 3, value: 1},
              {position: 2, id: 4, value: 1},
              {position: 3, id: 5, value: 1}]
    };
  }

  componentDidMount() {
    this._generateCards()
  }

  _generateCards() {
    const cards = [];

    for (var i = 1; i < 61; i++) {
      const cashValues = [50, 100, 150, 200, 250, 300, 350, 400, 450];
      const a    = Math.floor((Math.random() * 10) + 1);
      const d    = Math.floor((Math.random() * 10) + 1);
      const t    = Math.floor((Math.random() * 10) + 1);
      const cash = cashValues[Math.floor(Math.random() * cashValues.length)];
      const id   = i;

      const card = {
        type: 'US',
        cash: cash,
        a: a,
        d: d,
        t: t,
        id: i,
        position: 1
      }
      cards.push(card);
    }
    this.setState({
      cards: this.state.cards.concat(cards, ActionCards, DevelopmentCards, MaintenanceCards, MultipleChoiceCards)
    })
  }

  _renderColumns() {
    return this.state.columns.map((el, i) => (
      <Column _renderCards={this._renderCards.bind(this)} key={el.name} name={el.name} id={i} cash={el.cash}/>
    ));
  }

  _renderCards(that) {
    const columnId = that.props.id
    switch (columnId) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return this.state.cards.filter((el) => el.position == columnId).map((el, i) => (
          <Card _handleCardClick={this._handleCardClick.bind(this)} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={new Date() + i + el.type} />
        ))

        break;

      default:
        break;
    }
  }

  _renderDieColumns() {
    const classes = ['col-sm-2 col-sm-offset-4 dieColumn', 'col-sm-2 dieColumn', 'col-sm-2 dieColumn']
    const dieColumns = [1, 2, 3]
    return dieColumns.map((name, i) => (
      <DieColumns _handleDieLeftClick={this._handleDieLeftClick.bind(this)} _handleDieRightClick={this._handleDieRightClick.bind(this)} dice={this.state.dice} key={name} name={name} id={i} className={classes[i]}/>
    ));
  }

  _handleDieLeftClick(die) {
    const dieId = die.props.id
    const dice = this.state.dice
    const place = dice[dieId].position
    if (place == 2 || place == 3) {
      dice[dieId].position = place -1
      return this.setState({dice})
    } else {
      dice[dieId].position = place +2
      return this.setState({dice})
    }
  }

  _handleDieRightClick(die) {
    const dieId = die.props.id
    const dice = this.state.dice
    const place = dice[dieId].position
    if (place == 1 || place == 2) {
      dice[dieId].position = place +1
      return this.setState({dice})
    } else {
      dice[dieId].position = place -2
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

  _handleCardClick(card) {
    const cards = this.state.cards
    const cardId = card.props.id -1
    const cardCurrentPosition = cards[cardId].position
    if (cardCurrentPosition !== 5) {
      cards[cardId].position = cardCurrentPosition +1
      return this.setState({cards})
    }
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
