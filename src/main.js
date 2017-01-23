import React from 'react';
import ReactDOM from 'react-dom';
import ColumnList from './ColumnList';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <ColumnList />,
    document.getElementById('mount')
  );
});
