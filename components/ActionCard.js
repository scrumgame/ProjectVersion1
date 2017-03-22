import React, { Component } from 'react'

export default class ActionCard extends Component {
  constructor(props) {
    super(props)
  }
  _renderActionDie()  {
    if (this.props.actioncard.thrown == false && this.props.actioncard.id != 0) {
      return <button onClick={this.props._actionCardDieRoll}>KASTA MIG</button>
    } else if (this.props.actioncard.thrown == true && this.props.actioncard.id != 0) {
      return <p>{this.props.actioncard.dievalue}</p>
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.actioncard.text}</p>
        {this._renderActionDie()}
      </div>
    );
  }
}
