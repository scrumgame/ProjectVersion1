import React, { Component } from 'react'
import ReleasePlanWeek from './ReleasePlanWeek'
import './css/ReleasePlanDay.css'

export default class ReleasePlan extends Component {
  constructor(props) {
    super(props)
  }

  //Loops through 2 different states to create the releaseplan
  _generateReleasePlan() {
    return this.props.moneyearned.map((el, i) => (
      <tr className="row" key={i}>
        <td className='col-sm-1' key={1}>Sprint {i+1}</td>
      {this.props.releaseplandays.map((elem, index) => {

        if (this.props.releaseplan.sprint > i+1) {
          return <td className='col-sm-2 ReleasePlanDayDone' key={index}>{elem.name}</td>
        } else if (this.props.releaseplan.sprint == i+1 && this.props.releaseplan.day > index+1) {
          return <td className='col-sm-2 ReleasePlanDayDone' key={index}>{elem.name}</td>
        } else if (this.props.releaseplan.sprint == i+1 && this.props.releaseplan.day == index+1) {
          return <td className='col-sm-2 ReleasePlanDayCurrent' key={index}>{elem.name}</td>
        } else {
          return <td className='col-sm-2 ReleasePlanDay' key={index}>{elem.name}</td>
        }
      })}
        <td className='col-sm-1' key={7}>${el.cash}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="ReleasePlan">
        <table className="table">
          <tbody>
            {this._generateReleasePlan()}
          </tbody>
        </table>
      </div>
    );
  }
}
