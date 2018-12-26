import React, { Component } from "react";

import { ChartContainer, Chart } from './styles';
import { data } from './data';

const timeSeries = data["Time Series (Daily)"];

// create an array of properties from timeSeries
let arr = Object.values(timeSeries);
let keys = Object.keys(timeSeries);
console.log(arr)

// In order to work with the price data in an array of objects we have to create a function that takes in an array of objects, and returns an array of values from each element in that array's object.
let arrOfAllPrices = array => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    for (let price in array[i]) {
      // we don't want to include volume data
      if (price !== "volume") {
        output.push(array[i][price]);
      }
    }
  }
  return output;
};

// make sure to store the array for use in min/max functions.
const arrayOfProperties = arrOfAllPrices(arr);

// We want the lowest price for our lowest grid marker.
let min = Math.min(...arrayOfProperties);

// We want the highest price available in our data for the appropriate grid height.
let max = Math.max(...arrayOfProperties);

// round up the above min and max grid markers so that we can use that number for plotting the grid.
// rounded to the nearest 5th.
let gridMin = Math.round(min/5) * 5;
let gridMax = Math.round(max/5) * 5;

const chartWidth = arr.length * 5;
const chartHeight = gridMax - gridMin;

let yGrids = [];
for (let i = gridMin; i <= gridMax; i += 5) {
  yGrids.push(i)
}

let xGrids = [];
for (let i = 0; i <= chartWidth; i += 5) {
  xGrids.push(i)
}

class ChartWrapper extends Component {
  render() {
    console.log(chartWidth)
    return(
      <ChartContainer>
        <Chart viewBox={`0 ${gridMin} ${chartWidth} ${chartHeight}`} preserveAspectRatio={"none"}>
        <g id='yGrids'>
          {yGrids.map(grid => (
            <line x1='0' y1={grid} x2='100' y2={grid} stroke='#000' strokeWidth='1' key={grid} />
          ))}
        </g>

        <g id='ohlc'>
          {arr.map((data, index)=> {
            let x = (index + 1) * 5;
            return(
              <g key={index}>
                <line x1={x} y1={gridMin} x2={x} y2={gridMax} stroke='#000' strokeWidth='1' />

                <line x1={x} y1={data.low} x2={x} y2={data.high} stroke='#FF9F1C' strokeWidth='1' />
                <line x1={x - 2} y1={data.open} x2={x} y2={data.open} stroke='#FF9F1C' strokeWidth='1' />
                <line x1={x} y1={data.close} x2={x + 2} y2={data.close} stroke='#FF9F1C' strokeWidth='1' />
              </g>
            )
          })}
        </g>
        </Chart>
      </ChartContainer>
    )
  }
}

export default ChartWrapper;
