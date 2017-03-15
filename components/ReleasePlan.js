import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'

export default class ReleasePlan extends Component {
  constructor(props) {
    super(props)
  }

  _generateReleasePlan() {
    let s = 0
    let release = []
    while (s < 8) {
      s++
      let week = [
            <tr key={0}>
              <td className='col-sm-1' key={1}>Sprint {s}</td>
              <td className='col-sm-1' key={2}>Mon</td>
              <td className='col-sm-1' key={3}>Tue</td>
              <td className='col-sm-1' key={4}>Wed</td>
              <td className='col-sm-1' key={5}>Thu</td>
              <td className='col-sm-1' key={6}>Fri</td>
              <td className='col-sm-1' key={7}>Retrospective</td>
            </tr>
      ]
      release.push(week)
    }
    return release
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
