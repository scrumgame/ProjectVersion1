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
      return <p className="CardDivDollar">$<span className="CardDivValuesSpan">{this.props.cash}</span></p>
    }
  }

  //TODO: FIX THIS UGLY
  _ifADT() {
    if (this.props.a >= 0 && this.props.d >= 0 && this.props.t >= 0 ) {
      if (this.props.position == 1) {
        return [
          <p className="CardDivValues Active" key={1} >A: <span className="CardDivValuesSpan">{this.props.a}</span>&nbsp;</p>,
          <p className="CardDivValues" key={2} >D: <span className="CardDivValuesSpan">{this.props.d}</span>&nbsp;</p>,
          <p className="CardDivValues" key={3} >T: <span className="CardDivValuesSpan">{this.props.t}</span></p>
        ]
      } else if (this.props.position == 2) {
        return [
          <p className="CardDivValues" key={1} >A: <span className="CardDivValuesSpan">{this.props.a}</span>&nbsp;</p>,
          <p className="CardDivValues Active" key={2} >D: <span className="CardDivValuesSpan">{this.props.d}</span>&nbsp;</p>,
          <p className="CardDivValues" key={3} >T: <span className="CardDivValuesSpan">{this.props.t}</span></p>
        ]
      } else if (this.props.position == 3) {
        return [
          <p className="CardDivValues" key={1} >A: <span className="CardDivValuesSpan">{this.props.a}</span>&nbsp;</p>,
          <p className="CardDivValues" key={2} >D: <span className="CardDivValuesSpan">{this.props.d}</span>&nbsp;</p>,
          <p className="CardDivValues Active" key={3} >T: <span className="CardDivValuesSpan">{this.props.t}</span></p>
        ]
      } else {
        return [
          <p className="CardDivValues" key={1} >A: <span className="CardDivValuesSpan">{this.props.a}</span>&nbsp;</p>,
          <p className="CardDivValues" key={2} >D: <span className="CardDivValuesSpan">{this.props.d}</span>&nbsp;</p>,
          <p className="CardDivValues" key={3} >T: <span className="CardDivValuesSpan">{this.props.t}</span></p>
        ]
      }
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
