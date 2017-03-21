import React, { Component } from 'react'

export default class Retrospective extends Component {
  constructor(props) {
    super(props)
  }

  _renderRetrospectives() {
    return this.props.retrospective.map((el, i) => (
      <tr key={i}>
        <td key={1} className="col-sm-1">Sprint {i+1}</td>
        <td key={2} className="col-sm-7">{el.text}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className="container-fluid releaseplanRetrospective">
          <thead>
            <tr>
              <th colSpan="2">Retrospectives</th>
            </tr>
          </thead>
          <tbody>
            {this._renderRetrospectives()}
          </tbody>
        </table>
      </div>
    );
  }
}
