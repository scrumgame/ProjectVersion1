import React, { Component } from 'react'
import ReleasePlanDay from './ReleasePlanDay'
import './css/ReleasePlanDay.css'

export default class ReleasePlanWeek extends Component {
  constructor(props) {
    super(props)
  }

  _renderReleasePlanDays() {
    return this.props.releaseplandays
      .map((el, i) => {
        if (el.done == 3) {
          return <ReleasePlanDay name={el.name} done={el.done} key={i} className="ReleasePlanDayDone col-sm-1" _tickDay={this.props._tickDay}/>
        } else if (el.done == 2){
          return <ReleasePlanDay name={el.name} done={el.done} key={i} className="ReleasePlanDayCurrent col-sm-1" _tickDay={this.props._tickDay}/>
        } else {
          return <ReleasePlanDay name={el.name} done={el.done} key={i} className="ReleasePlanDay col-sm-1" _tickDay={this.props._tickDay}/>
        }
      })
  }

  render() {
    return (
      <div>
        <div className="ReleasePlanWeek col-sm-1 col-sm-offset-3">Sprint {this.props.releaseplan.sprint}</div>
        {this._renderReleasePlanDays()}
      </div>
    );
  }
}
