import React, { Component } from 'react';
import Input from './Input'

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props._login(this.username.value, this.password.value);
    }


  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input key={1} placeholder="Username" type="text" ref={(username) => this.username = username}/> &nbsp;
        <input key={2} placeholder="Password" type="password" ref={(password) => this.password = password}/> &nbsp;
        <Input key={3} type="submit" value="Login" className="btn btn-default"/>
        <h2>{this.props.loginmessage.text}</h2>
      </form>
    );
  }
}
