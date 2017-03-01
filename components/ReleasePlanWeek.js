import React, { Component } from 'react'
import ReleasePlanDay from './ReleasePlanDay'
import './css/ReleasePlanWeek.css'

export default class ReleasePlanWeek extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="ReleasePlanWeek">Sprint {this.props.releaseplan.sprint}</div>
        <ReleasePlanDay name="Mon" _tickDay={this.props._tickDay}/>
        <ReleasePlanDay name="Tue" _tickDay={this.props._tickDay}/>
        <ReleasePlanDay name="Wed" _tickDay={this.props._tickDay}/>
        <ReleasePlanDay name="Thu" _tickDay={this.props._tickDay}/>
        <ReleasePlanDay name="Fri" _tickDay={this.props._tickDay}/>
      </div>
    );
  }
}
