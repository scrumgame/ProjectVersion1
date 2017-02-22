import React, { Component } from 'react';
import Card from './Card'
import './css/Column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  _renderCards(id) {
    switch (id) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return this.props.cards.filter((el) => el.position == id && el.type != 'AC' && el.type != 'MC').map((el, i) => (
          <Card _handleCardClick={this.props._handleCardClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={new Date() + i + el.type} />
        ))
        break;
      default:
        break;
    }
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
        {this._renderCards(this.props.id)}
      </div>
    );
  }
}
