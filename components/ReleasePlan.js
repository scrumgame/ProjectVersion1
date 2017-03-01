import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'
import './css/ReleasePlan.css'

export default class ReleasePlan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-sm-4 col-sm-offset-4 ReleasePlan">
        <ReleasePlanWeek />
      </div>
    );
  }
}
