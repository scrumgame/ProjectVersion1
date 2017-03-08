import React, { Component } from 'react';

export default class NewGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="submit" className={this.props.className} type={this.props.type} value={this.props.name} onClick={this.props._gameNav}/>
    );
  }
}
