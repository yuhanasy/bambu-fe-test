import styled from '@emotion/styled/';

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
`;

export const Main = styled.main`
  flex: 1 1 480px;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;