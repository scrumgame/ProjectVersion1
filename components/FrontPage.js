import React, { Component } from 'react';
import Game from './Game'
import Input from './Input'
import Logo from './Logo'
import NewGame from './NewGame'
import CustomGame from './CustomGame'
import Login from './Login'
import InputRange from 'react-input-range'
import './css/FrontPage.css'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)
  }

  // The ability as an admin to custom the game
  _changeUI() {
    if(this.props.admin.value == true) {
      return [
        <div key={0} className="col-sm-12">
          <form key={2} onSubmit={this.props._quickPlay}>
          <Input key={1} _saveTeamName={this.props._saveTeamName} placeholder="Choose teamname" ref="createTeam" className="teamnameInput" />
            <div className="col-sm-offset-3 col-sm-6">
              <InputRange
                maxValue={120}
                minValue={60}
                value={this.props.slidevalue}
                onChange={this.props._slideState.bind(this)}
              />
              <NewGame key={2} type="submit" value="Start Game" className="btn btn-default admin-newgame" _gameNav={this.props._gameNav}/>
            </div>
          </form>
      </div>

      ]
    } else if (this.props.customgame.value == true) {
      return [
          <div key={0} className="col-sm-12">
            <Login _login={this.props._login} loginmessage={this.props.loginmessage}/>
          </div>
        ]
    } else {
      return [
        <div key={0} className="col-sm-12">
          <form key={6} onSubmit={this.props._quickPlay}>
            <Input key={1} _saveTeamName={this.props._saveTeamName} className="teamnameInput" placeholder="Choose teamname" ref="createTeam"/>
            <NewGame key={2} className="btn btn-default new-game" name="New Game" type="submit" _gameNav={this.props._gameNav} />
          </form>
          <CustomGame key={3} className="btn btn-default custom-game" name="Custom Game" type="submit" _customGame={this.props._customGame}/>
        </div>
      ]
    }
  }

  render() {
    return (
      <div key={1} className="col-sm-12 text-center">
        <Logo key={9}/>
        {this._changeUI()}
      </div>
    );
  }
}
