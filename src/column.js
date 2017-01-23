import React from 'react';
import './column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
<<<<<<< HEAD
      <div class="col-xs-2"><Card/></div>
=======
      <div className="col-xs-2 Column"><h3>{ this.props.name }</h3></div>
>>>>>>> d9c52403b58e7eea987d22f5f3b1d1446e8db2e9
    );
  }
}

export default Column;
