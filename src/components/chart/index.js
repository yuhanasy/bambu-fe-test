import React, { Component } from "react";

import { ChartContainer, Chart, Axes } from './styles';
import { data } from './data';

const timeSeries = data["Time Series (Daily)"];

let arr = Object.values(timeSeries).reverse();
console.log(arr);

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
const dataLength = arr.length;

let yGrids = Array.from(new Array(dataRange),(val,index)=>index);
let xGrids = Object.keys(timeSeries).reverse();


class ChartWrapper extends Component {
  render() {
    const width = 300;
    const height = 150;
    const intervalX = width / dataLength;
    const intervalY = height / dataRange;
    let month = '01';
    const months = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'};
    const coordinateY = (y) => height - (y - gridMin) * intervalY;
    return(
      <ChartContainer>
        <Chart viewBox={`0 0 ${width} ${height}`} preserveAspectRatio={"none"}>
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
        <Axes viewBox={`0 0 ${width} ${height}`} preserveAspectRatio={"none"}>
          <g>
            <line x1='10%' x2='10%' y1='0' y2='90%' stroke='#000' strokeWidth='.5' />
            <line x1='10%' x2 ='100%' y1='90%' y2='90%' stroke='#000' strokeWidth='.5' />
            {yGrids.map(grid => {
              let tick = (height - (grid * intervalY * 0.9)) - (height * 0.1);
              let tickMark = gridMin + grid;
              return (
                <g key={grid} >
                  <line x1='9%' x2='10%' y1={tick} y2={tick} stroke='#000' strokeWidth='.5' />
                  {tickMark % 5 === 0 ? (<text x='10' y={tick} textLength='10'>$ {tickMark}</text>) : (null)}
                  
                </g>
              )
            })}
            {xGrids.map((tickMark, index, arr) => {
              let tick = ((width / arr.length) * index * 0.9) + (width * 0.1);
                if (tickMark.substr(5,2) !== month) {
                  month = tickMark.substr(5,2);
                  return (
                  <g key={tick}>
                    <line x1={tick} x2={tick} y1='90%' y2='91%' stroke='#000' strokeWidth='.5' />
                    <text x={tick + 20} y='92%'>{months[month]}</text>
                  </g>
                  )
                }
            })}
          </g>
        </Axes>
      </ChartContainer>
    )
  }
}
export default ChartWrapper;
