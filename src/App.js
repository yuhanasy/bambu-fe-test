import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import Footer from "./components/footer/index";
import { Header, SubHeader } from "./components/header/styles";
import { Page, Row, Col, Main, Loading } from "./shared/layouts";
import { Card } from "./components/card/styles";
import ChartWrapper from "./components/chart/index";

import { fetchData } from "./utils/fetchData";
import { symbols } from "./utils/stockData";

let currentSymbol = localStorage.getItem("symbol")
  ? localStorage.getItem("symbol")
  : "MSFT";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: currentSymbol,
      data: { kosong: "masih kosong" },
      loading: true
    };

    this.fetchSelectedData = this.fetchSelectedData.bind(this);
  }

  componentDidMount() {
    fetchData(currentSymbol).then(res => {
      this.setState({
        data: res.data["Time Series (Daily)"]
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.symbol !== prevState.symbol) {
      fetchData(this.state.symbol).then(res => {
        this.setState({
          data: res.data["Time Series (Daily)"]
        });
      });
    }

    if (this.state.data !== {} && this.state.data !== prevState.data) {
      this.setState({
        loading: false
      });
    }
  }

  fetchSelectedData(symbol) {
    this.setState({
      symbol: symbol
    });

    localStorage.setItem("symbol", symbol);
  }

  render() {
    let { symbol, data, loading } = this.state;
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
            {loading ? (
              <Loading>Page Loading...</Loading>
            ) : (
              <Main>
                <Header>
                  Welcome
                  <SubHeader>Let's check your favorite stock</SubHeader>
                </Header>
                {data !== undefined ? (
                  <Card>
                    <ChartWrapper
                      symbol={symbol}
                      data={data}
                      width={300}
                      height={100}
                    />
                  </Card>
                ) : (
                  <Loading>
                    Sory, maximum loading data reached. You have to wait one
                    minute to reload data again.
                  </Loading>
                )}
              </Main>
            )}
          </Col>
          <Footer />
        </Row>
      </Page>
    );
  }
}

export default App;
