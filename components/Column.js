import React, { Component } from 'react';
import Card from './Card'
import './css/Column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  // Checks if the column should show cash value
  _cash() {
    if (this.props.cash) {
      return <h3>{this.props.name} ${this.props.cash}</h3>
    } else {
      return <h3>{this.props.name}</h3>
    }
  }

  //Only shows the top card of the stack
  _sliceCards(type, id) {
    return this.props.cards
      .filter((el) => el.position == id && el.type != 'AC' && el.type != 'MC' && el.type == type)
      .map((el, i) => (
        <Card _handleCardClick={this.props._handleCardClick} _handlePrioClick={this.props._handlePrioClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i} index={i} number={el.number} priority={el.priority} timeclicked={el.timeclicked}/>
      ))
      .slice(0, 1)
  }

  // Returns the card components depending on their current position
  _renderCards(id) {
    switch (id) {
      case 0:
        return [
          this._sliceCards('US', id),
          this._sliceCards('D', id),
          this._sliceCards('M', id)
        ]
        break

      case 1:
      case 2:
      case 3:
      case 4:
      return this.props.cards
        .filter((el) => el.position == id && el.done == false)
        .sort((a,b) => {
          if (a.priority > 0 || b.priority > 0) {
            return b.priority - a.priority
          } else {
            return a.timeclicked - b.timeclicked
          }
        })
        .map((el, i) => (
          <Card _handleCardClick={this.props._handleCardClick} _handlePrioClick={this.props._handlePrioClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i} index={i} number={el.number} priority={el.priority} timeclicked={el.timeclicked} />
        ))
        break

      default:
        break
    }
  }

  render() {
    return (
      <div className={`col-sm-2 column ${this.props.className}`}>
        {this._cash()}
        {this._renderCards(this.props.id)}
      </div>
    );
  }
}
