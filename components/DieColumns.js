import React, { Component } from 'react';
import Die from './Die'
import './css/DieColumns.css';

export default class DieColumns extends Component {
  constructor(props) {
    super(props)
  }

  _renderDice(v) {
    switch (v) {
      case 0:
        return this.props.dice.filter((el) => el.position == 1).map((el, i) => (
          <Die _handleDieLeftClick={this.props._handleDieLeftClick} _handleDieRightClick={this.props._handleDieRightClick} dice={this.props.dice} value={el.value} key={el.id} id={el.id} position={el.position}/> ))
        break;

      case 1:
        return this.props.dice.filter((el) => el.position == 2).map((el, i) => (
          <Die _handleDieLeftClick={this.props._handleDieLeftClick} _handleDieRightClick={this.props._handleDieRightClick} dice={this.props.dice} value={el.value} key={el.id} id={el.id} position={el.position}/> ))
        break;

      case 2:
        return this.props.dice.filter((el) => el.position == 3).map((el, i) => (
          <Die _handleDieLeftClick={this.props._handleDieLeftClick} _handleDieRightClick={this.props._handleDieRightClick} dice={this.props.dice} value={el.value} key={el.id} id={el.id} position={el.position}/> ))
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {this._renderDice(this.props.id)}
      </div>
    );
  }
}
