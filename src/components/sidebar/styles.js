import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  width: 300px;
  background-color: #131931;
  position: relative;
`;

export const SidebarCardGroup = styled.ul`
  margin: 0;
  padding: 0;
`;

export const SidebarCard = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding-left: 2rem;
  color: #fdfdfd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #182037;
  ::before{
    content: '';
    position: absolute;
    left: 0;
    height: inherit;
    border-color: #fff;
    border-style: solid;
    border-width: 0 0 0 0.3em;
    visibility: hidden;
  }
  :hover {
    background-color: #182037;
    ::before {
      visibility: visible;
    }
  }
  :active {
    background-color: #182037;
    ::before {
      visibility: visible;
    }
  }
`;
