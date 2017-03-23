import React, { Component } from 'react';
import './css/Navbar.css'

export default class Navbar extends Component {

  constructor(props) {
    super(props)
  }

  // Changes the content of the navbar depending on state
  _changeNavbar() {
    const modalTypeReleaseplan = 'Releaseplan'
    const modalTypeRules       = 'Rules'
    const modalTypeHighscore   = 'Highscore'
    const modalTypeAction      = 'Action'

    if (this.props.navbar.value == true) {
      return [
        <ul key={0} className="dropdown-menu" role="menu">
          <li key={1} onClick={this.props._openModal.bind(this, modalTypeReleaseplan)}><a href="#">Releaseplan</a></li>
          <li key={2} onClick={this.props._openModal.bind(this, modalTypeRules)}><a href="#">Rules</a></li>
          <li key={3} onClick={this.props._openModal.bind(this, modalTypeHighscore)}><a href="#">Highscores</a></li>
          <li key={4} onClick={this.props._openModal.bind(this, modalTypeAction)}><a href="#">Actioncard</a></li>
          <li key={5} onClick={this.props._restart}><a href="#">Restart </a></li>
        </ul>
      ]
    } else {
      return [
        <ul key={0} className="dropdown-menu" role="menu">
          <li key={1} onClick={this.props._openModal.bind(this, modalTypeRules)}><a href="#">Rules</a></li>
          <li key={2} onClick={this.props._openModal.bind(this, modalTypeHighscore)}><a href="#">Highscores</a></li>
        </ul>
      ]
    }
  }

  render() {
    return (
      <div>
        <h2 className="teamfont text-center">{this.props.teamname.value}</h2>
        <nav className="navbar-kwp-header navbar-default navbarColor">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Navbar">
                <span key={1} className="sr-only"></span>
                <span key={2} className="icon-bar"></span>
                <span key={3} className="icon-bar"></span>
                <span key={4} className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown"><a className="dropdown" data-toggle="dropdown" role="button" aria-expanded="false">Info <span className="caret"></span></a>
                  {this._changeNavbar()}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
