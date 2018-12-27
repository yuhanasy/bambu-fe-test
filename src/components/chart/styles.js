import styled from "@emotion/styled/";

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: hotpink; */
  `;

export const Chart = styled.svg`
  width: 90%;
  /* min-width: 540px; */
  height: 90%;
  position: absolute;
  left: 10%;
  /* background-color: #182037; */
  `;

export const Axes = styled.svg`
  width: 100%;
  /* min-width: 600px; */
  height: 100%;
  font-size: 6px;
  color: #fff;
  position: absolute;
  z-index: 5;
`;
