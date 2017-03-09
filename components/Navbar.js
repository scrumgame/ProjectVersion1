import React, { Component } from 'react';

export default class Navbar extends Component {

  constructor(props) {
    super(props)
  }

  _changeNavbar() {
    const modalTypeReleaseplan = 'Releaseplan'
    const modalTypeRules       = 'Rules'
    const modalTypeHighscore   = 'Highscore'

    if (this.props.navbar.value == true) {
      return [
        <ul className="dropdown-menu" role="menu">
          <li onClick={this.props._openModal.bind(this, modalTypeReleaseplan)}>Releaseplan</li>
          <li onClick={this.props._openModal.bind(this, modalTypeRules)}>Rules</li>
          <li onClick={this.props._openModal.bind(this, modalTypeHighscore)}>Highscores</li>
          <li><a href="#">Restart </a></li>
        </ul>
      ]
    } else {
      return [
        <ul className="dropdown-menu" role="menu">
          <li onClick={this.props._openModal.bind(this, modalTypeRules)}>Rules</li>
          <li onClick={this.props._openModal.bind(this, modalTypeHighscore)}>Highscores</li>
        </ul>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar-kwp-header navbar-default">
        <div className="container pull-left">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Navbar">
              <span className="sr-only"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown"><a className="dropdown" data-toggle="dropdown" role="button" aria-expanded="false">Info <span className="caret"></span></a>
                {this._changeNavbar()}
              </li>
            </ul>
            <h2>{this.props.teamname.value}</h2>
          </div>
        </div>
       </nav>
    );
  }
}
