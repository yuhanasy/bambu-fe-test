import React from "react";
import PropTypes from 'prop-types';

import { ChartContainer } from "./styles";
import AxesXY from "./AxesXY";
import Ohlc from "./Ohlc";

const ChartWrapper = ({symbol, data, width, height}) => {
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
  
  let yAxisMin = Math.round(min / 5) * 5 - 5;
  let yAxisMax = Math.round(max / 5) * 5 + 5;
  
  const dataRange = yAxisMax - yAxisMin;
  const dataLength = arr.length;
  console.log(min, max, yAxisMin, yAxisMax, dataRange)
  
  let xGrids = Object.keys(data).reverse();

  const intervalX = width / dataLength;
  const intervalY = height / dataRange;

  const coordinateY = y => height - (y - yAxisMin) * intervalY;
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
        xGrids={xGrids}
        intervalX={intervalX}
        yAxisMin={yAxisMin}
        dataLength={dataLength}
        dataRange={dataRange}
      />
    </ChartContainer>
  );
}


ChartWrapper.propTypes = {
  symbol: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default ChartWrapper;
