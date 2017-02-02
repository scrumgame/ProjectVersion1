import React, { Component } from 'react';
import Column from './Column';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  renderColumns() {
    const columnHead = ['Backlog', 'Analysis', 'Develop.', 'Testing', 'Done']
    const columnClass = ['col-sm-2 col-sm-offset-1 column', 'col-sm-2 column', 'col-sm-2 column', 'col-sm-2 column', 'col-sm-2 column']

    return columnHead.map((head, index) => (
      <Column name={head} key={index} className={columnClass[index]}/>
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
