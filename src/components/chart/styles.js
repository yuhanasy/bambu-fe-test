import styled from "@emotion/styled/";

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Chart = styled.svg`
  width: 90%;
  min-width: 600px;
  height: 90%;
  position: absolute;
  left: 10%;
  background-color: #ffbf69;
`;

export const Axes = styled.svg`
  width: 100%;
  height: 100%;
  font-size: 4px;
  position: absolute;
  z-index: 5;
`;
