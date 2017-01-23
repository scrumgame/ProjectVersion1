import React from 'react';
import './column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={ this.props.className }><h3 className="columnHeadline">{ this.props.name }</h3></div>
    );
  }
}

export default Column;
