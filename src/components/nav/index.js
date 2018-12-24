import React from 'react';

import { NavWrapper, NavContainer, Logo } from './styles';

const Nav = (props) => {
  return(
    <NavWrapper theme={props.theme}>
      <NavContainer>
        <Logo>Stock Exchange</Logo>
        <p>menu</p>
      </NavContainer>
    </NavWrapper>
  )
}

export default Nav;