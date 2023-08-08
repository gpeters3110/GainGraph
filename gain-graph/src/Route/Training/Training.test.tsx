import React from 'react';
import ReactDOM from 'react-dom';
import Training from './Training';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Training />, div);
  ReactDOM.unmountComponentAtNode(div);
});