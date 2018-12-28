import styled from "@emotion/styled/";

export const NavWrapper = styled.div`
  background-color: #131931;
  padding: 10px 20px;
  border-bottom: 1px solid #293250;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fdfdfd;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;
