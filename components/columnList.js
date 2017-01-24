import React from 'react';
import Column from './Column';

class ColumnList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: ['Backlog', 'Analysis', 'Development', 'Testing', 'Done'],
      bootclass: ['col-sm-2 col-sm-offset-1 column', 'col-sm-2 column', 'col-sm-2 column', 'col-sm-2 column', 'col-sm-2 column']
    };
  }

  renderColumns() {
    return this.state.columns.map((headline, i) => (
      <Column name={headline} key={headline} className={this.state.bootclass[i]}/>
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderColumns()}
        </div>
      </div>
    );
  }

}

export default ColumnList;
