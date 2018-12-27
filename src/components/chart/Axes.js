import React from "react";

import { Axes } from "./styles";

const months = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

let month = "00";

let color = '#fff'

const AxesXY = ({
  width,
  height,
  yGrids,
  xGrids,
  intervalY,
  gridMin,
  dataLength
}) => {
  return (
    <Axes viewBox={`0 0 ${width} ${height}`} preserveAspectRatio='xMidYMid meet'>
    <style>
    {`.small { "font: italic 13px sans-serif;" }`}
    .heavy { "font: bold 30px sans-serif;" }
  </style>
      <g>
        {/* <line
          x1="10%"
          x2="10%"
          y1="0"
          y2="90%"
          stroke={color}
          strokeWidth=".5"
        /> */}
        {/* <line
          x1="10%"
          x2="100%"
          y1="90%"
          y2="90%"
          stroke={color}
          strokeWidth=".5" */}
        />
        {yGrids.map(grid => {
          let tick = height - grid * intervalY * 0.9 - height * 0.1;
          let tickMark = gridMin + grid;
          return (
            <g key={grid}>
              <line
                x1="9%"
                x2="10%"
                y1={tick}
                y2={tick}
                stroke={color}
                strokeWidth=".5"
              />
              {tickMark % 5 === 0 ? (
                <text x="10" y={tick} fill={color}>
                  $ {tickMark}
                </text>
              ) : null}
            </g>
          );
        })}
        {xGrids.map((tickMark, index, arr) => {
          let tick = (width / dataLength) * index * 0.9 + width * 0.1;
          if (tickMark.substr(5, 2) !== month) {
            month = tickMark.substr(5, 2);
            return (
              <g key={tick}>
                <line
                  x1={tick}
                  x2={tick}
                  y1="90%"
                  y2="91%"
                  stroke={color}
                  strokeWidth=".5"
                />
                <text x={tick + 20} y="92%" fill={color}>
                  {months[month]}
                </text>
              </g>
            );
          }
        })}
      </g>
    </Axes>
  );
};

export default AxesXY;
