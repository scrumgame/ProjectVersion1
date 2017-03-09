import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'

export default class Game extends Component {

  constructor(props) {
    super(props);
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
          {this.props._renderSumColumns()}
        </div>
        <div className="row">
          {this.props._renderColumns()}
        </div>
      </div>
    )
  }

}
