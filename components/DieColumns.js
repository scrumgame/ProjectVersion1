import React, { Component } from 'react';
import './css/DieColumns.css';

export default class DieColumns extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="dieColumn col-sm-2">
        {this.props.renderDieColumns}
      </div>
    );
  }
}
