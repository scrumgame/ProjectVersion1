import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'

export default class ReleasePlan extends Component {
  constructor(props) {
    super(props)
  }

  _bajs() {
    return <p>hej på dig din lilla bajskorv du </p>
  }

  render() {
    return (
      <div className="ReleasePlan">

          {this._bajs()}

      </div>
    );
  }
}
