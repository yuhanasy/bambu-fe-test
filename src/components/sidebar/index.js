import React, { Component } from "react";

import { SidebarWrapper, SidebarCardGroup, SidebarCard } from "./styles";

class SideBar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <SidebarCardGroup>
          <SidebarCard>
            AAPL
          </SidebarCard>
        </SidebarCardGroup>
      </SidebarWrapper>
    )
  }
}

export default SideBar;
