import React, { Component } from 'react'


export default class HighscoreRow extends Component {
  constructor(props) {
    super(props)
  }

  // displays the top highscore of the teams
  render() {
    return (
        <tr>
          <td>{this.props.rank}</td>
          <td>{this.props.teamname}</td>
          <td>{this.props.total}</td>
        </tr>
    );
  }
}
