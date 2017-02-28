import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <FrontPage />,
    document.getElementById('mount')
  );
});
