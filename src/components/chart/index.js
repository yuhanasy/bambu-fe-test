import React, { Component } from "react";

import { ChartContainer } from "./styles";
import AxesXY from "./Axes";
import Ohlc from "./Ohlc";

import { data } from "./data";

const timeSeries = data["Time Series (Daily)"];

let arr = Object.values(timeSeries).reverse();

let flattenData = array => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    for (let price in array[i]) {
      if (price !== "5. volume") {
        output.push(array[i][price]);
      }
    }
  }
  return output;
};

const arrayOfData = flattenData(arr);

let min = Math.min(...arrayOfData);
let max = Math.max(...arrayOfData);

let gridMin = Math.round(min / 5) * 5 - 5;
let gridMax = Math.round(max / 5) * 5 + 1;

const dataRange = gridMax - gridMin;
const dataLength = arr.length;

let yGrids = Array.from(new Array(dataRange), (val, index) => index);
let xGrids = Object.keys(timeSeries).reverse();

class ChartWrapper extends Component {
  render() {
    const width = 300;
    const height = 150;
    const intervalX = width / dataLength;
    const intervalY = height / dataRange;
    const coordinateY = y => height - (y - gridMin) * intervalY;
    return (
      <ChartContainer>
        <Ohlc
          arr={arr}
          width={width}
          height={height}
          intervalX={intervalX}
          coordinateY={coordinateY}
        />

        <AxesXY
          width={width}
          height={height}
          yGrids={yGrids}
          xGrids={xGrids}
          intervalY={intervalY}
          gridMin={gridMin}
          dataLength={dataLength}
        />
      </ChartContainer>
    );
  }
}

export default ChartWrapper;
