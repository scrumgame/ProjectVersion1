import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  _changeNavbar() {
    if (this.props.navbar.value == true) {
      return [
        <ul className="dropdown-menu" role="menu">
          <li><a href="#">Releaseplan</a></li>
          <li><a href="#">Rules</a></li>
          <li><a href="#">Highscores</a></li>
          <li><a href="#">Restart </a></li>
        </ul>
      ]
    } else {
      return [
        <ul className="dropdown-menu" role="menu">
          <li><a href="#">Rules</a></li>
          <li><a href="#">Highscores</a></li>
        </ul>
      ]
    }
  }


  render() {
    return (
      <nav className="navbar-kwp-header navbar-default navbar-fixed-top">
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
               </div>
           </div>
       </nav>
    );
  }
}
