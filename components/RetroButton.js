import React, { Component } from 'react';
import './css/RollButton.css'

export default class RetroButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props._handleRetrospective()} className="RollButton col-sm-2">Retrospective</button>
      </div>
    );
  }
}
