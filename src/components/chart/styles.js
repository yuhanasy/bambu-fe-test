import styled from "@emotion/styled/";

const chartWidth = 600;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: 450px) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ChartTitle = styled.h3`
  color: #fff;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
`;

export const Chart = styled.svg`
  width: 90%;
  height: 90%;
  position: absolute;
  left: 10%;

  @media (max-width: 450px) {
    width: ${chartWidth * 0.9}px;
    left: ${chartWidth * 0.1}px;
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
    width: ${chartWidth}px;
  }
`;
