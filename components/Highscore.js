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

  // Highscore top 10
  _renderTopTen() {
    return this.props.highscore.map((el, i) =>
      <HighscoreRow key={i} teamname={el.teamname} rank={i+1} total={el.total} />
    )
  }

  // The team playing currents score and rank
  _renderCurrentTeam() {
    return <HighscoreRow key={1} teamname={this.props.highscorecurrentteam.teamname} rank={this.props.highscorecurrentteam.rank} total={this.props.highscorecurrentteam.total} />
  }

  // displays the top highscore of the teams
  render() {
    return (
      <div className="container-fluid highScore">
        <table className="col-sm-12 topTen">
          <tbody>
            <tr>
              <th className='col-sm-1'>Rank</th>
              <th className='col-sm-5'>Team</th>
              <th className='col-sm-5'>Score</th>
            </tr>
            {this._renderTopTen()}
          </tbody>
        </table>
        <br />
        <table className="col-sm-12">
          <tbody>
            <tr>
              <th className='col-sm-1'>Rank</th>
              <th className='col-sm-5'>You</th>
              <th className='col-sm-5'>Score</th>
            </tr>
            {this._renderCurrentTeam()}
          </tbody>
        </table>
      </div>
    );
  }
}
