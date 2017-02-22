import React, { Component } from 'react';
import Die from './Die'
import './css/DieColumns.css';

export default class DieColumns extends Component {
  constructor(props) {
    super(props)
  }

  _renderDice(id) {
    switch (id) {
      case 1:
      case 2:
      case 3:
        return this.props.dice.filter((el) => el.position == id).map((el, i) => (
          <Die _handleDieClick={this.props._handleDieClick} type={el.type} value={el.value} key={el.id} id={el.id} position={el.position}/> ))
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className={`col-sm-2 dieColumn ${this.props.className}`}>
        {this._renderDice(this.props.id)}
      </div>
    );
  }
}
