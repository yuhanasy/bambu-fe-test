import styled from "@emotion/styled/";

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: 450px) {
    overflow-x: scroll;
  }
  `;

export const Chart = styled.svg`
  width: 90%;
  height: 90%;
  position: absolute;
  left: 10%;

  @media (max-width: 450px) {
  width: 120%;
  }
  `;

export const Axes = styled.svg`
  width: 100%;
  height: 100%;
  font-size: 6px;
  color: #fff;
  position: absolute;
  z-index: 5;

  @media (max-width: 450px) {
  width: 130%;
  }
`;
