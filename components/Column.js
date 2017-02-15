import React, { Component } from 'react';
import Card from './Card'
import './css/Column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  _cash() {
    if (this.props.cash) {
      return <h3>{this.props.name} ${this.props.cash}</h3>
    } else {
      return <h3>{this.props.name}</h3>
    }
  }

  render() {
    return (
      <div className="column col-sm-2">
        {this._cash()}
        {this.props._renderCards(this)}
      </div>
    );
  }
}
