import React, { Component} from 'react';

import Nav from './components/nav/index';
import { Container } from './shared/styles';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav theme={this.props.theme} />
        <Container>
          Hello Kamu, mana React(si) mu?
        </Container>
      </div>
    )
  }
}

export default App;