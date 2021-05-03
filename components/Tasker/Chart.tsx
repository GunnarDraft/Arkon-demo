import { scaleLinear } from "d3";
import { useMemo } from "react";
import styled from "styled-components";

export const ChartContent = styled.div`
  border: 1px solid blue;
  width: 400px;
  height: 400px;
`;
const Axis = () => {
  const ticks = useMemo(() => {
    const xScale = scaleLinear().domain([0, 100]).range([10, 290]);
    return xScale.ticks().map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, []);
  return (
    <svg>
      <path d="M 9.5 0.5 H 290.5" stroke="currentColor" />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y2="6" stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  );
};

export const Chart = () => {
  return (
    <ChartContent>
      <Axis />
    </ChartContent>
  );
};
