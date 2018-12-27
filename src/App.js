import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import { Header, SubHeader } from './components/header/styles';
import { Page, Row, Col, Main } from "./shared/layouts";
import { Card } from "./components/card/styles";
import ChartWrapper from "./components/chart/index";

import { fetchData } from "./utils/fetchData";
import { symbols } from "./utils/stockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "MSFT"
    };

    this.fetchSelectedData = this.fetchSelectedData.bind(this);
  }

  componentDidMount() {
    // fetchData().then(res => localStorage.setItem('data', JSON.stringify(res.data['Time Series (Daily)'])))
  }

  componentDidUpdate() {
    // fetchData(this.state.symbol).then(res => localStorage.setItem('data', JSON.stringify(res.data['Time Series (Daily)'])))
  }

  fetchSelectedData(symbol) {
    this.setState({
      symbol: symbol
    });

    localStorage.setItem("symbol", symbol);
  }

  render() {
    return (
      <Page>
        <Row>
          <Nav />
          <Col>
            <SideBar
              symbols={symbols}
              selectData={this.fetchSelectedData}
              selected={localStorage.getItem("symbol")}
            />
            <Main>
              <Header>
                Welcome
                <SubHeader>
                  Let's check your favorite stock
                </SubHeader>
              </Header>
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
