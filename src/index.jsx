import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = (props) => {
  return (
    <h1>
      Hello,
      {props.name}
    </h1>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World By Tomo" />, root);
}
