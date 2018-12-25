import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import { Page, Container, Row, Col } from "./shared/layouts";
import { fetchData } from './utils/fetchData';
import { symbols } from './utils/stockData'
import { runInThisContext } from "vm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: ''
    }

    this.fetchSelectedData = this.fetchSelectedData.bind(this)
  }

  componentDidMount() {
    fetchData().then(res => {console.log(res.data)})
  }

  componentDidUpdate() {
    fetchData(this.state.symbol).then(res => {console.log(res.data)})
  }

  fetchSelectedData(symbol) {
    this.setState({
      symbol: symbol
    })
  }

  render() {
    return (
      <Page>
        <Row>
          <Nav />
          <Col>
            <SideBar symbols={symbols} selectData={this.fetchSelectedData} />
            <Container>Hello Kamu, mana React(si) mu?</Container>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default App;
