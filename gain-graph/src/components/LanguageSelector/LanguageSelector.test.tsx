import React from 'react';
import ReactDOM from 'react-dom';
import LanguageSelector from './LanguageSelector';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LanguageSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});