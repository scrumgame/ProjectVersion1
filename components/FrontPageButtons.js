import React, { Component } from 'react';

export default class FrontPageButtons extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props._newGame(this)} className={this.props.className}>{this.props.name}</button>
      </div>
    );
  }
}
