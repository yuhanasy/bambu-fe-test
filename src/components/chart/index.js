import React, { Component } from "react";

import { ChartContainer, Chart } from './styles';
import { data } from './data';

const timeSeries = data["Time Series (Daily)"];

let arr = Object.values(timeSeries);
let keys = Object.keys(timeSeries);

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

let gridMin = Math.round(min/5) * 5 - 2;
let gridMax = Math.round(max/5) * 5 + 2;
    
const dataRange = gridMax - gridMin;
let yGrids = new Array(dataRange);
const dataLength = arr.length;


class ChartWrapper extends Component {
  render() {
    const width = 300;
    const height = 150;
    let intervalX = width / dataLength;
    let intervalY = height / dataRange;
    const coordinateY = (y) => height - (y - gridMin) * intervalY;
    return(
      <ChartContainer>
        <Chart viewBox={`0 0 ${width} ${height}`} preserveAspectRatio={"none"}>
        <g id='yGrids'>
          {

          }
        </g>

        <g id='ohlc'>
          {arr.map((data, index)=> {
            let x = (index * intervalX) + intervalX;
            let open = coordinateY(data['1. open']);
            let high = coordinateY(data['2. high']);
            let low = coordinateY(data['3. low']);
            let close = coordinateY(data['4. close'])
            return(
              <g key={index}>
                {/* <line x1={x} y1='0' x2={x} y2={height} stroke='#aaffff' strokeWidth='1' /> */}

                <line x1={x} y1={low} x2={x} y2={high} stroke='#FF9F1C' strokeWidth='1' />
                <line x1={x - 2} y1={open} x2={x} y2={open} stroke='#FF9F1C' strokeWidth='1' />
                <line x1={x} y1={close} x2={x + 2} y2={close} stroke='#FF9F1C' strokeWidth='1' />
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
