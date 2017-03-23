import React, { Component } from 'react'
import './css/ActionCard.css'

export default class ActionCard extends Component {
  constructor(props) {
    super(props)
  }

  _renderActionDie()  {
    if (this.props.actioncard.thrown == false && this.props.actioncard.id != 0) {
      return <button onClick={this.props._actionCardDieRoll} className="actionButton col-sm-2 col-sm-offset-5">Roll</button>
    } else if (this.props.actioncard.thrown == true && this.props.actioncard.id != 0) {
      return <p className="actionCardInfo col-sm-12">Days left: {this.props.actioncard.dievalue}</p>
    }
  }

  render() {
    return (
      <div className="row">
        <p className="col-sm-12 actionCardInfo">{this.props.actioncard.text}</p>
        {this._renderActionDie()}
      </div>
    );
  }
}
