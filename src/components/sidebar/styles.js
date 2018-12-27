import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  width: 300px;
  background-color: #131931;
  position: relative;
  transition: all 0.5s ease-in;

  @media (max-height: 600px) {
    overflow-y: scroll;

    ::-webkit-scrollbar-button {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #ffffff;
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #ea647f;
    }
    ::-webkit-scrollbar-track {
      background-color: #293250;
    }
    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar:hover {
      width: 8px;
    }
  }

  @media (max-width: 900px) {
    width: 120px;
  }

  @media (max-width: 450px) {
    display: none;
  }
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
  background-color: ${props => (props.selected ? "#62dce9" : "#131931")};
  border-bottom: 1px solid #182037;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    padding-left: 1rem;
  }

  ::before {
    content: "";
    position: absolute;
    left: 0;
    height: inherit;
    border-color: #fff;
    border-style: solid;
    border-width: 0 0 0 0.3em;
    visibility: ${props => (props.selected ? "visible" : "hidden")};
  }
  :hover {
    background-color: ${props => (props.selected ? "#62dce9" : "#182037")};
  }
  :active {
    background-color: #62dce9;
  }
`;
