import React, { Component } from 'react';

export default class CustomGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input onClick={() => this.props._customGame()} type={this.props.type} value={this.props.name} className={this.props.className}/>
      </div>
    );
  }
}
