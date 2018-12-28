import styled from "@emotion/styled/";

export const FooterWrapper = styled.div`
  background-color: #131931;
  padding: 5px 20px;
  border-top: 1px solid #293250;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfdfd;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const FooterText = styled.p`
  font-size: .8rem;
  font-weight: 300;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  
  :hover{
    color: #ea647f;
  }
`;