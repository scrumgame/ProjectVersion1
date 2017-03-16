import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'
import axios from 'axios'

export default class ReleasePlan extends Component {
  constructor(props) {
    super(props)
  }

  _generateReleasePlan() {
    const lol = this.props.retrospective.map((el, i) => {
        this.props._getRetrospective(i),
        <tr key={i}>
          <td className='col-sm-1' key={1}>Sprint {i+1}</td>
          <td className='col-sm-1' key={2}>Mon</td>
          <td className='col-sm-1' key={3}>Tue</td>
          <td className='col-sm-1' key={4}>Wed</td>
          <td className='col-sm-1' key={5}>Thu</td>
          <td className='col-sm-1' key={6}>Fri</td>
          <td className='col-sm-1' key={7}>{el.text}</td>
        </tr>
    })
    return lol
  }

  render() {
    return (
      <div className="ReleasePlan">
        <table className="container-fluid">
          <tbody>
            {this._generateReleasePlan()}
          </tbody>
        </table>
      </div>
    );
  }
}
