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
  xGrids,
  intervalX,
  yAxisMin,
  dataRange
}) => {
  let gridYminor = 30;
  let gridYmajor = 6;
  let intervalAxisY = (height / (gridYminor));
  let intervalDataY = dataRange / (gridYminor);

  let gridY = [];
  for(let i = 0; i < gridYminor; i++) {
    let coordinateY = (height - (intervalAxisY * i)) * 0.9;
    let valueY = yAxisMin + intervalDataY * i;
    if(i % gridYmajor === 0) {
      gridY.push({coordinateY: coordinateY, valueY: `$ ${valueY}`})
    } else {
      gridY.push({coordinateY: coordinateY, valueY: ''})
    }
  }

  console.log(gridY)

  return (
    <Axes viewBox={`0 0 ${width} ${height}`} preserveAspectRatio='none'>
      <g>
        {gridY.map(grid => (
          <g key={grid.coordinateY}>
            <line
              x1="9%"
              x2="10%"
              y1={grid.coordinateY}
              y2={grid.coordinateY}
              stroke={color}
              strokeWidth=".5"
            />
            <text x="5" y={grid.coordinateY} fill={color}>
              {grid.valueY}
            </text>
          </g>
        ))}

        {xGrids.map((tickMark, index) => {
          let tick = intervalX * index * 0.9 + width * 0.1;
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
