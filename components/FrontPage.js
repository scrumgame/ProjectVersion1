import React, { Component } from 'react';
import Game from './Game'
import Input from './Input'
import Logo from './Logo'
import NewGame from './NewGame'
import CustomGame from './CustomGame'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
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
            <Input placeholder="Username" type="text"/>,
            <Input placeholder="Password" type="password"/>
            <Input type="submit" value="Login" className="btn btn-default"/>
          </form>
        ]
    } else {
      return [
        <div>
          <form onSubmit={this.props._quickPlay}>
            <Input className="teamnameInput" placeholder="Choose teamname" ref="createTeam"/>
            <NewGame className="btn btn-default" name="New Game" type="submit"/>
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

// _renderPage() {
// if (this.state.newgame.value == true) {
//   return <Game />
// } else if (this.state.customgame.value == true) {
//   return [
//         <div>
//         <Logo />


//        </div>
//          ]
// } else {
//   return [
//     <div>
//       <Logo />
//
//     </div>
// ]}
// }
//

//
// handleTeam(event) {
//   event.preventDefault()
//
//   const createTeam = this.refs.createTeam
//   const task = createTeam.value
//
//
//     return this.setState({
//       newgame: {value: true}
//     })
// }
