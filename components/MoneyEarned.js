import React, { Component } from 'react'

export default class MoneyEarned extends Component {
  constructor(props) {
    super(props)
  }

  _generateMoneyEarned() {
    return this.props.moneyearned.map((el, i) => (
      <tr key={i}>
        <td key={1} className="col-sm-1">Sprint {i+1}</td>
        <td key={2} className="col-sm-1">${el.cash}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className="container-fluid">
          <thead>
            <tr>
              <th colSpan="2">Money Earned</th>
            </tr>
          </thead>
          <tbody>
            {this._generateMoneyEarned()}
          </tbody>
        </table>
      </div>
    );
  }
}
