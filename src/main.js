import React from 'react';
import ReactDOM from 'react-dom';
import Column from './Column';
import Card from './card';//bara för test

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Column />,
    document.getElementById('mount')
  );
});
