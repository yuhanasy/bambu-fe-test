import React, { Component } from "react";

import { SidebarWrapper, SidebarCardGroup, SidebarCard } from "./styles";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(symbol) {
    this.props.selectData(symbol);
  }

  render() {
    const symbols = this.props.symbols;
    const selectedSymbol = this.props.selected;
    return (
      <SidebarWrapper>
        <SidebarCardGroup>
          {symbols.map((symbol, index) => {
            return (
              <SidebarCard
                onClick={() => this.handleOnclick(symbol)}
                selected={symbol === selectedSymbol}
                key={index}
              >
                {symbol}
              </SidebarCard>
            );
          })}
        </SidebarCardGroup>
      </SidebarWrapper>
    );
  }
}

export default SideBar;
