import styled from "@emotion/styled/";

export const Card = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 400px;
  
  background-color: #293250;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 450px) {
    border-radius: 0;
    height: 50vh;
  }
`;