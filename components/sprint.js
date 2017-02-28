import React, { Component } from 'react';
import './css/sprint.css'

export default class Sprint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-sm-12 text-center">
        <div className="col-sm-2 col-sm-offset-4 hej">
          Sprint
        </div>
        <div className="col-sm-1  hej">
          Mon
        </div>
        <div className="col-sm-1  hej">
          Tue
        </div>
        <div className="col-sm-1 hej">
          Wed
        </div>
        <div className="col-sm-1  hej">
          Thu
        </div>
        <div className="col-sm-1  hej">
          Fri
        </div>
      </div>
    );
  }
}
