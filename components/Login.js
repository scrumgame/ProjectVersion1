import React, { Component } from 'react';
import Input from './Input'
import './css/Login.css'

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
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} className="login-form">
          <input key={1} className="login-input" placeholder="Username" type="text" ref={(username) => this.username = username}/> &nbsp;
          <input key={2} className="login-input" placeholder="Password" type="password" ref={(password) => this.password = password}/> &nbsp;
          <Input key={3} type="submit" value="Login" className="btn btn-default login-button"/>
          <h2 className="login-message">{this.props.loginmessage.text}</h2>
        </form>
      </div>
    );
  }
}
