import React from 'react';
import './column.css';
import Card from './Card';

class Column extends React.Component {

  constructor(props) {
    super(props);
  }

  // SUDO RENDER OF CARDS NEED TO CHANGE PROBABLY
  renderCards() {
    if (this.props.name == "Backlog") {
      var cards = [];
      for (var i = 0; i < 5; i++) {
        cards.push(<Card key={i}/>)
        console.log(cards)
      }
    return cards
    }
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3 className="columnHeadline">{ this.props.name }</h3>
        {this.renderCards()}
      </div>
    );
  }
}

export default Column;
