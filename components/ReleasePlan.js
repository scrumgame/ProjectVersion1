import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'

export default class ReleasePlan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ReleasePlan">
        <ReleasePlanWeek />
        <ReleasePlanWeek />
        <ReleasePlanWeek />
        <ReleasePlanWeek />
        <ReleasePlanWeek />
        <ReleasePlanWeek />
        <ReleasePlanWeek />
        <ReleasePlanWeek />
      </div>
    );
  }
}
