import React from 'react';
import { render } from 'react-dom';

import './global-styles.css';
import App from './App';

const UI = () => {
  return(
    <App />
  )
}

render(<UI />, document.getElementById('root'));
