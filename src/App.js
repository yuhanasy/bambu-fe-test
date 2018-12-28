import React, { Component } from "react";

import Nav from "./components/nav/index";
import SideBar from "./components/sidebar/index";
import { Header, SubHeader } from './components/header/styles';
import { Page, Row, Col, Main } from "./shared/layouts";
import { Card } from "./components/card/styles";
import ChartWrapper from "./components/chart/index";

import { fetchData } from "./utils/fetchData";
import { symbols } from "./utils/stockData";

let currentSymbol = localStorage.getItem('symbol') ? localStorage.getItem('symbol') : 'MSFT';

class App extends Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      symbol: currentSymbol,
      data: {kosong: "masih kosong"},
      loading: true
    };

    this.fetchSelectedData = this.fetchSelectedData.bind(this);
  }

  componentDidMount() {
    fetchData(currentSymbol).then(res => {
      this.setState({
        data: res.data['Time Series (Daily)']
      })
    })



    console.log('MOUNTED');
    console.log('MOUNTED', this.state.data);
    console.log('----------------------------------------------');
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.symbol !== prevState.symbol) {
      fetchData(this.state.symbol).then(res => {
        this.setState({
          data: res.data['Time Series (Daily)']
        })
      })
    }

    if (this.state.data !== {} && this.state.data !== prevState.data) {
      this.setState({
        loading: false
      })
    }

    console.log('COMPONENT UPDATED');
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
    
  }



  fetchSelectedData(symbol) {
    this.setState({
      symbol: symbol
    });

    localStorage.setItem("symbol", symbol);
  }

  render() {
    console.log('RENDER', this.state.symbol);
    console.log('RENDER', this.state.data);
    
    
    let loading = this.state.loading;
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
              <Row>Page Loading</Row>
            ) : (
              <Main>
                <Header>
                  Welcome
                  <SubHeader>
                    Let's check your favorite stock
                  </SubHeader>
                </Header>
                <Card>
                  <ChartWrapper symbol={this.state.symbol} data={this.state.data} />
                </Card>
              </Main>
            )}
          </Col>
        </Row>

      </Page>
    );
  }
}

export default App;
