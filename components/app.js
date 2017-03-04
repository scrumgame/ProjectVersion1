import React, { Component } from 'react';
import FrontPage from './FrontPage'
import Game from './Game'
import Navbar from './Navbar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newgame:
        {value: false},

      customgame:
        {value: false},

      admin:
        {value: false},

      slidevalue: 60
    }

    this._slideState = this._slideState.bind(this)
  }

  _slideState(slidevalue) {
    this.setState({slidevalue: slidevalue})
  }

  _customGame() {
    return this.setState({
      customgame: {value: true}
    })
  }

  _quickPlay() {
    return this.setState({
      newgame: {value: true}
    })
  }

  _startGame() {
    if ( this.state.newgame.value == true) {
      return [
        <Navbar />,
        <Game slidevalue={this.state.slidevalue}/>
      ]
    } else {
      return [
        <Navbar />,
        <FrontPage slidevalue={this.state.slidevalue} admin={this.state.admin} customgame={this.state.customgame} _customGame={this._customGame.bind(this)} _slideState={this._getState}
      _slideState={this._slideState} _quickPlay={this._quickPlay.bind(this)}/>
    ]
    }
  }

  render() {
    return (
      <div>
        {this._startGame()}
      </div>
    );
  }
}
