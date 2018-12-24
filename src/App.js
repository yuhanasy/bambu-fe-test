import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import { Page, Container, Row, Col } from "./shared/layouts";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Row>
          <Nav />
          <Col>
            <SideBar />
            <Container>Hello Kamu, mana React(si) mu?</Container>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default App;
