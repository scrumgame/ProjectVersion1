import React, { Component } from 'react';
import './css/Rules.css'

export default class Rules extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="test">
          <img  src={require("../images/rulesplan0.png")} />
          <img  className="bajs" src={require("../images/rulesboard.png")} />
          <img  src={require("../images/rules1.png")} />
          <img  src={require("../images/bajs.png")} />
      </div>
    );
  }
}
