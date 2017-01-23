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
          <Column className="col-sm-2 col-sm-offset-1" name="Backlog"/>
          <Column className="col-sm-2" name="Analysis"/>
          <Column className="col-sm-2" name="Development"/>
          <Column className="col-sm-2" name="Testing"/>
          <Column className="col-sm-2" name="Done"/>
        </div>
      </div>
    );
  }
}

export default ColumnList;
