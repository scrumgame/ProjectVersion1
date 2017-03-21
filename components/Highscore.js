import React, { Component } from 'react'
import axios from 'axios'
import HighscoreRow from './HighscoreRow'
import './css/Highscore.css'

export default class Highscore extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props._getTopTenHS()
  }

  _renderTopTen() {
    return this.props.highscore.map((el, i) =>
      <HighscoreRow key={i} teamname={el.teamname} rank={i+1} total={el.total} />
    )
  }

  _renderCurrentTeam() {
    return <HighscoreRow key={1} teamname={this.props.highscorecurrentteam.teamname} rank={this.props.highscorecurrentteam.rank} total={this.props.highscorecurrentteam.total} />
  }

  // displays the top highscore of the teams
  render() {
    return (
      <div className="container-fluid">
        <table>
          <tbody>
            <tr>
              <th className='col-sm-1'>Rank</th>
              <th className='col-sm-1'>Team</th>
              <th className='col-sm-1'>Score</th>
            </tr>
            {this._renderTopTen()}
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            <tr>
              <th className='col-sm-1'>Rank</th>
              <th className='col-sm-1'>You</th>
              <th className='col-sm-1'>Score</th>
            </tr>
            {this._renderCurrentTeam()}
          </tbody>
        </table>
      </div>
    );
  }
}
