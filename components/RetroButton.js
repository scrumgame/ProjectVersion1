import React, { Component } from 'react';
import './css/RollButton.css'

export default class RetroButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const modalTypeRetrospective = 'Retrospective'
    return (
      <div>
        <button onClick={this.props._handleRetrospective.bind(this, modalTypeRetrospective)} className={this.props.className}>Retro</button>
      </div>
    );
  }
}
