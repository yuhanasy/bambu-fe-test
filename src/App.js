import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import { Page, Row, Col, Main } from "./shared/layouts";
import { Card } from './components/card/styles';
import ChartWrapper from './components/chart/index';

import { fetchData } from './utils/fetchData';
import { symbols } from './utils/stockData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: 'MSFT'
    }

    this.fetchSelectedData = this.fetchSelectedData.bind(this)
  }

  // componentDidMount() {
  //   fetchData().then(res => {console.log(res.data)})
  // }

  // componentDidUpdate() {
  //   fetchData(this.state.symbol).then(res => {console.log(res.data)})
  // }

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
            <Main>
              <Card>
                <ChartWrapper />
              </Card>
            </Main>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default App;
