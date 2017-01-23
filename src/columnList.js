import React from 'react';
import Column from './Column';

class ColumnList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Column name="Backlog"/>
          <Column name="Analysis"/>
          <Column name="Development"/>
          <Column name="Testing"/>
          <Column name="Done"/>
        </div>
      </div>
    );
  }
}

export default ColumnList;
