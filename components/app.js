import React, { Component } from 'react';
import FrontPage from './FrontPage'
import Game from './Game'
import Navbar from './Navbar'
import Modals from './Modals'
import axios from 'axios'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamname:
        {value: undefined},

      newgame:
        {value: false},

      customgame:
        {value: false},

      admin:
        {value: false},

      navbar:
        {value: false},

      slidevalue: 60,

      showModal:
        {open: false, type: undefined}
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

  _quickPlay(that) {

    axios({
        method: 'post',
        url: 'http://localhost/Grupp_2_projekt/ProjectVersion1/api/?/score',
        data: {
          team: this.state.teamname.value
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

    this.setState({
      newgame: {value: true}
    })
  }

  _gameNav() {
    return this.setState({
      navbar: {value: true}
    })
  }

  _closeModal() {
    return this.setState({
      showModal: {open: false}
    });
  }

  _openModal(type) {
    return this.setState({
      showModal: {open: true, type: type}
    });
  }

  _saveTeamName(event) {
    return this.setState({
      teamname: {value: event.target.value}
    });
  }

  _startGame() {
    if (this.state.newgame.value == true) {
      return [
        <Navbar _openModal={this._openModal.bind(this)} navbar={this.state.navbar} _gameNav={this._gameNav.bind(this)} teamname={this.state.teamname}/>,
        <Game slidevalue={this.state.slidevalue} _openModal={this._openModal.bind(this)} />,
      ]
    } else {
      return [
        <Navbar _openModal={this._openModal.bind(this)} navbar={this.state.navbar} teamname={this.state.teamname}/>,
        <FrontPage slidevalue={this.state.slidevalue} admin={this.state.admin} customgame={this.state.customgame} _customGame={this._customGame.bind(this)} _slideState={this._getState}
        _slideState={this._slideState} _quickPlay={this._quickPlay.bind(this)} _saveTeamName={this._saveTeamName.bind(this)}
        _gameNav={this._gameNav.bind(this)} />,
      ]
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this._startGame()}
          <Modals showModal={this.state.showModal} _closeModal={this._closeModal.bind(this)} />
        </div>
      </div>
    );
  }
}
