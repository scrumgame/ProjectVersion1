import React, { Component } from 'react';
import Highscore from './Highscore'
import './css/GameOver.css'

export default class GameOver extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div>
        <h1 className="col-sm-12 gameoverHeadline">Thank you {this.props.teamname} for playing!</h1>
        <div className="col-sm-8 col-sm-offset-2 highScoreFinal">
          <Highscore
            _getTopTenHS={this.props._getTopTenHS}
            highscore={this.props.highscore}
            highscorecurrentteam={this.props.highscorecurrentteam}
          />
        </div>
      </div>
    );
  }
}
