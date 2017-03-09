import React, { Component } from 'react';
import Game from './Game'
import Input from './Input'
import Logo from './Logo'
import NewGame from './NewGame'
import CustomGame from './CustomGame'
import InputRange from 'react-input-range'
import './css/FrontPage.css'


export default class FrontPage extends Component {
  constructor(props) {
    super(props)
  }


  _changeUI() {
    if(this.props.admin.value == true) {
      return [
        <Input placeholder="Choose teamname" ref="createTeam"/>,
          <form onSubmit={this.props._quickPlay}>
            <InputRange
              maxValue={120}
              minValue={60}
              value={this.props.slidevalue}
              onChange={this.props._slideState.bind(this)}

            />
            <Input type="submit" value="Start Game" className="btn btn-default"/>
          </form>
      ]
    } else if (this.props.customgame.value == true) {
      return [
          <form>
            <Input placeholder="Username" type="text"/>
            <Input placeholder="Password" type="password"/>
            <Input type="submit" value="Login" className="btn btn-default"/>
          </form>
        ]
    } else {
      return [
        <div>
          <form onSubmit={this.props._quickPlay}>
            <Input _saveTeamName={this.props._saveTeamName} className="teamnameInput" placeholder="Choose teamname" ref="createTeam"/>
            <NewGame className="btn btn-default" name="New Game" type="submit" _gameNav={this.props._gameNav} />
          </form>
           <CustomGame className="btn btn-default" name="Custom Game" type="submit" _customGame={this.props._customGame}/>
         </div>
      ]

    }
  }

  render() {
    return (
      <div>

        <Logo />
        {this._changeUI()}
      </div>
    );
  }
}
