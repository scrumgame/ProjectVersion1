import React, { Component } from 'react'
import './css/ReleasePlanWeek.css'

export default class ReleasePlanWeek extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="ReleasePlanWeek">Sprint</div>
        <div className="ReleasePlanWeek">Mon</div>
        <div className="ReleasePlanWeek">Tue</div>
        <div className="ReleasePlanWeek">Wed</div>
        <div className="ReleasePlanWeek">Thu</div>
        <div className="ReleasePlanWeek">Fri</div>
      </div>
    );
  }
}
