import React, { Component } from 'react';
import './css/Logo.css'

export default class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src={require("../images/logo2.png")} />
      </div>
    );
  }
}
