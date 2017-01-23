import React from 'react';
import './column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-xs-2 Column"><h3>{ this.props.name }</h3></div>
    );
  }
}

export default Column;
