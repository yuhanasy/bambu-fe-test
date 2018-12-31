import React from "react";
import PropTypes from "prop-types";

import { Chart } from "./styles";

const bullish = '#62dce9'
const bearish = '#ea647f'

const Ohlc = ({ arr, width, height, intervalX, coordinateY }) => {
  return (
    <Chart viewBox={`0 0 ${width} ${height}`} preserveAspectRatio='none'>
      <g id="ohlc">
        {arr.map((data, index) => {
          let x = index * intervalX + intervalX;
          let open = coordinateY(data["1. open"]);
          let high = coordinateY(data["2. high"]);
          let low = coordinateY(data["3. low"]);
          let close = coordinateY(data["4. close"]);
          let color = open < close ? (bearish) : (bullish);
          return (
            <g key={index}>
              {/* <line x1={x} y1='0' x2={x} y2={height} stroke='#aaffff' strokeWidth='1' /> */}

              <line
                x1={x}
                y1={low}
                x2={x}
                y2={high}
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
              />
              <line
                x1={x - 2}
                y1={open}
                x2={x}
                y2={open}
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
              />
              <line
                x1={x}
                y1={close}
                x2={x + 2}
                y2={close}
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>
    </Chart>
  );
};

Ohlc.propType = {
  arr: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  intervalX: PropTypes.number,
  coordinateY: PropTypes.number
}

export default Ohlc;
