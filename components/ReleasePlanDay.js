import React, { Component } from 'react'
import './css/ReleasePlanDay.css'

export default class ReleasePlanDay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div onClick={() => this.props._tickDay(this)} className="ReleasePlanDay">{this.props.name}</div>
    );
  }
}
