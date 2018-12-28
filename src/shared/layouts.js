import styled from "@emotion/styled/";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 90%;
  text-align: center;
  color: #fdfdfd;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Col = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`;

export const Main = styled.main`
  flex: 1 1 480px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    padding: 20px 0;
  }
`;

export const Loading = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;
