import React, { Component } from "react";

import { SidebarWrapper, SidebarCardGroup, SidebarCard } from "./styles";

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const symbols = this.props.symbols;
    return (
      <SidebarWrapper>
        <SidebarCardGroup>
          {symbols.map(symbol => {
            return(
              <SidebarCard key={symbol}>
                {symbol}
              </SidebarCard>
            )
          })}
        </SidebarCardGroup>
      </SidebarWrapper>
    )
  }
}

export default SideBar;
