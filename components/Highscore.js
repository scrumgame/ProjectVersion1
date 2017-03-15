import React, { Component } from 'react';
import './css/Highscore.css'

export default class Highscore extends Component {
  constructor(props) {
    super(props)
  }

  // displays the top highscore of the teams
  render() {
    return (
      <table className="container-fluid">
        <tbody>
          <tr>
            <th className='col-sm-1'>Team</th>
            <th className='col-sm-1'>Score</th>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Score</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
