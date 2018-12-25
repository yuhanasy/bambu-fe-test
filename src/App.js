import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import { Page, Container, Row, Col } from "./shared/layouts";
import { fetchData } from './utils/fetchData';
import { symbols } from './utils/stockData'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchData().then(res => {console.log(res.data)})
  }

  render() {
    return (
      <Page>
        <Row>
          <Nav />
          <Col>
            <SideBar symbols={symbols} />
            <Container>Hello Kamu, mana React(si) mu?</Container>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default App;
