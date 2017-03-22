import React, { Component } from 'react'
import './css/Modals.css'

export default class Retrospective extends Component {
  constructor(props) {
    super(props)
  }

  _renderRetrospectives() {
    return this.props.retrospective.map((el, i) => (
      <tr key={i} className="row">
        <td key={1} className="col-sm-6">Sprint {i+1}</td>
        <td key={2} className="col-sm-6">{el.text}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table className="table RetrospectiveTable">
        <thead>
          <tr className="row">
            <th className="col-sm-12" colSpan="2">Retrospectives</th>
          </tr>
        </thead>
        <tbody>
          {this._renderRetrospectives()}
        </tbody>
      </table>
    );
  }
}
