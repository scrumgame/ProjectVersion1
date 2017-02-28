import React, { Component } from 'react';
import App from './app'
import Logo from './Logo'
import FrontPageButtons from './FrontPageButtons'
import './css/FrontPage.css'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game:
        {value: false}
    }
  }


  _newGame(that) {
    return this.setState({
      game: {value: true}
    })
  }

  bajs() {
  if (this.state.game.value == true) {
    return <App />
  } else {
    return [<Logo />,
    <FrontPageButtons className="btn btn-block" name="newGame" _newGame={this._newGame.bind(this)}/>,
    <FrontPageButtons className="btn btn-default" name="custom game"/>
  ]}
  }

  render() {
    return (
      <div>
        {this.bajs()}
      </div>
    );
  }
}
