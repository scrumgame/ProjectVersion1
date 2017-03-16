import React, { Component } from 'react';

export default class CardButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button className="prio" onClick={() => this.props._handleCardButtonClick(this)}>Prio</button>
      </div>
    );
  }
}
