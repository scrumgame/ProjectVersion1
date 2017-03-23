import React, { Component } from 'react'
import './css/ActionCard.css'

export default class ActionCard extends Component {
  constructor(props) {
    super(props)
  }

  // This function shows a rollbutton and then a text with the rolled number
  _renderActionDie()  {
    switch (this.props.actioncard.id) {
      case 121:
      case 126:
        if (this.props.actioncard.clicked == false && this.props.actioncard.id != 0) {
          return <button onClick={this.props._actionCardDieRoll} className="actionButton col-sm-2 col-sm-offset-5">Roll</button>
        } else if (this.props.actioncard.clicked == true && this.props.actioncard.id != 0) {
          return <p className="actionCardInfo col-sm-12">Days left: {this.props.actioncard.number}</p>
        }
        break
      case 125:
        if (this.props.actioncard.clicked == false) {
          return <button onClick={this.props._actionCardSaveSprint} className="actionButton col-sm-2 col-sm-offset-5">I understand</button>
        }
        break
      default:
        break
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
