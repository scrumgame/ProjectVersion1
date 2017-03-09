import React, { Component } from 'react'
import CardButton from './CardButton'
import './css/Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  _handleCardButtonClick() {
    this.props._handlePrioClick(this)
  }

  _ifCash() {
    if (this.props.cash) {
      return <p>${this.props.cash}</p>
    }
  }

  _ifADT() {
    if (this.props.a >= 0 && this.props.d >= 0 && this.props.t >= 0 ) {
      return [
        <p key={1} >A: {this.props.a}</p>,
        <p key={2} >D: {this.props.d}</p>,
        <p key={3} >T: {this.props.t}</p>
      ]
    }
  }

  _ifPrio() {
    if (this.props.type == 'D' || this.props.type == 'M') {
      return <CardButton _handleCardButtonClick={this._handleCardButtonClick.bind(this)}/>
    }
  }

  render (){
    return(
      <div onClick={() => this.props._handleCardClick(this)} className="CardDiv">
        <h4>{this.props.type} {this.props.number}</h4>
        {this._ifCash()}
        {this._ifADT()}
        {this._ifPrio()}
      </div>
    );
  }
}
