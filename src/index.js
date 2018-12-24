import React from 'react';
import { render } from 'react-dom';

import './global-styles.css';
import App from './App';

const dark = {
  fontColor: "#fdfdfd",
  backgroundColor: '#182037',
  mainColor: '#131931',
  cardColor: '#293251'
}

const UI = () => {
  return(
    <App />
  )
}

render(<UI />, document.getElementById('root'));
