import React, { Component } from 'react';
import Die from './Die'
import './css/DieColumns.css';

export default class DieColumns extends Component {
  constructor(props) {
    super(props)
  }


  _die() {
    var die = Math.floor((Math.random() * 6) + 1);
    return die;
  }

  _renderDice(v) {
    switch (v) {
      case 0:
        return this.props.dice.filter((el) => el.dieColumn == 1).map((el, i) => (
          <Die _handleDieLeftClick={this.props._handleDieLeftClick} _handleDieRightClick={this.props._handleDieRightClick} dice={this.props.dice} value={el.value} key={el.id} id={el.id} dieColumn={el.dieColumn}/> ))
        break;

      case 1:
        return this.props.dice.filter((el) => el.dieColumn == 2).map((el, i) => (
          <Die _handleDieLeftClick={this.props._handleDieLeftClick} _handleDieRightClick={this.props._handleDieRightClick} dice={this.props.dice} value={el.value} key={el.id} id={el.id} dieColumn={el.dieColumn}/> ))
        break;

      case 2:
        return this.props.dice.filter((el) => el.dieColumn == 3).map((el, i) => (
          <Die _handleDieLeftClick={this.props._handleDieLeftClick} _handleDieRightClick={this.props._handleDieRightClick} dice={this.props.dice} value={el.value} key={el.id} id={el.id} dieColumn={el.dieColumn}/> ))
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
