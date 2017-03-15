import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'

export default class Game extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._generateCards()
    setTimeout(this.props._createDbCards, 3000)
  }

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

    this.props._pushCardsIntoState(cards)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ReleasePlanWeek releaseplan={this.props.releaseplan} releaseplandays={this.props.releaseplandays} _tickDay={this.props._tickDay}/>
          {this.props._renderRollOrRetroButton()}
        </div>
        <div className="row">
          {this.props._renderDieColumns()}
        </div>
        <div className="row">
          <div className="col-sm-2 col-sm-offset-1 DiceSum">
            <h4>Points</h4>
          </div>
          {this.props._renderSumColumns()}
        </div>
        <div className="row">
          {this.props._renderColumns()}
        </div>
      </div>
    )
  }

}
