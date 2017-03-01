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
        let US =
          this.props.cards
            .filter((el) => el.position == id && el.type != 'AC' && el.type != 'MC' && el.type == 'US')
            .map((el, i) => (
              <Card _handleCardClick={this.props._handleCardClick} _handlePrioClick={this.props._handlePrioClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i} index={i} number={el.number} priority={el.priority} timeclicked={el.timeclicked}/>
            ))
            .slice(0, 1)

        let D =
          this.props.cards
            .filter((el) => el.position == id && el.type != 'AC' && el.type != 'MC' && el.type == 'D')
            .map((el, i) => (
              <Card _handleCardClick={this.props._handleCardClick} _handlePrioClick={this.props._handlePrioClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i} index={i} number={el.number} priority={el.priority} timeclicked={el.timeclicked}/>
            ))
            .slice(0, 1)

        let M =
          this.props.cards
            .filter((el) => el.position == id && el.type != 'AC' && el.type != 'MC' && el.type == 'M')
            .map((el, i) => (
              <Card _handleCardClick={this.props._handleCardClick} _handlePrioClick={this.props._handlePrioClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i} index={i} number={el.number} priority={el.priority} timeclicked={el.timeclicked}/>
            ))
            .slice(0, 1)

        return [US, D, M]

        break;
      case 1:
      case 2:
      case 3:
      case 4:

        return this.props.cards
          .filter((el) => el.position == id && el.type != 'AC' && el.type != 'MC')
          .sort(function(a,b) {
            return a.priority < b.priority
          })
          .map((el, i) => (
            <Card _handleCardClick={this.props._handleCardClick} _handlePrioClick={this.props._handlePrioClick} position={el.position} id={el.id} type={el.type} cash={el.cash} a={el.a} d={el.d} t={el.t} key={i} index={i} number={el.number} priority={el.priority} timeclicked={el.timeclicked} />
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
      <div className={`col-sm-2 column ${this.props.className}`}>
        {this._cash()}
        {this._renderCards(this.props.id)}
      </div>
    );
  }
}
