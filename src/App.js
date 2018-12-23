import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import Nav from './components/nav/index';
import { Container } from './shared/styles'


const darkBlue = {
  background: 'blue'
}

const App = () => {
  return (
    <ThemeProvider theme={darkBlue}>
      <Nav />
      <Container>
        Hello Kamu, mana React(si) mu?
      </Container>
    </ThemeProvider>
  )
}

export default App;