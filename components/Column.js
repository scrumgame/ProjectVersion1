import React, { Component } from 'react';
import './css/Column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column col-sm-2">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
