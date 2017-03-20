import React, { Component } from 'react';
import './css/NewGame.css'

export default class NewGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="submit" className={this.props.className} type={this.props.type} value={this.props.name} onClick={this.props._gameNav}/>
      </div>
    );
  }
}
