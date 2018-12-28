import React, { Component } from "react";
import PropTypes from 'prop-types';

import { ChartContainer } from "./styles";
import AxesXY from "./AxesXY";
import Ohlc from "./Ohlc";

// import { data } from "./data";
// const timeSeries = data["Time Series (Daily)"];
// let arr = Object.values(timeSeries).reverse();



// const data = JSON.parse(localStorage.getItem('data'));
// let arr = Object.values(data).reverse();

// let flattenData = array => {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let price in array[i]) {
//       if (price !== "5. volume") {
//         output.push(array[i][price]);
//       }
//     }
//   }
//   return output;
// };

// const arrayOfData = flattenData(arr);

// let min = Math.min(...arrayOfData);
// let max = Math.max(...arrayOfData);

// let gridMin = Math.round(min / 5) * 5 - 5;
// let gridMax = Math.round(max / 5) * 5 + 1;

// const dataRange = gridMax - gridMin;
// const dataLength = arr.length;

// let yGrids = Array.from(new Array(dataRange), (val, index) => index);
// let xGrids = Object.keys(data).reverse();
// let xGrids = Object.keys(timeSeries).reverse();

class ChartWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // start inspection
    const data = (this.props.data);
    
    let arr = Object.values(data).reverse();
    
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
    console.log(min, max, gridMin, gridMax, dataRange)
    
    let yGrids = Array.from(new Array(dataRange), (val, index) => index); // dataRange mustn't NaN
    let xGrids = Object.keys(data).reverse();
    // // end inspection

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

ChartWrapper.propTypes = {
  symbol: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default ChartWrapper;
