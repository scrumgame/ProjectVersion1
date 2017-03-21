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

  // Checks if the card holds any cash value
  _ifCash() {
    if (this.props.cash) {
      return <p className="CardDivDollar">$<span className="CardDivValuesSpan">{this.props.cash}</span></p>
    }
  }

  //This function checks position of the card and returns the correct class
  _highlightCurrentValue(p) {
    if (this.props.position == p) {
      return "CardDivValues Active"
    } else {
      return "CardDivValues"
    }
  }

  //Checks if the card holds any Analys, Development and Testing value
  _ifADT() {
    if (this.props.a >= 0 && this.props.d >= 0 && this.props.t >= 0 ) {
      return [
        <p className={this._highlightCurrentValue(1)} key={1} >A: <span className="CardDivValuesSpan">{this.props.a}</span>&nbsp;</p>,
        <p className={this._highlightCurrentValue(2)} key={2} >D: <span className="CardDivValuesSpan">{this.props.d}</span>&nbsp;</p>,
        <p className={this._highlightCurrentValue(3)} key={3} >T: <span className="CardDivValuesSpan">{this.props.t}</span></p>
      ]
    }
  }

  // Checks if the card should have a prioritybutton or not
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
