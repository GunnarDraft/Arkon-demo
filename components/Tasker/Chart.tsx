import * as d3 from "d3"; 

import styled from "styled-components";
import { TaskerContent } from "../../styles/Components";
import { VictoryLine, VictoryAxis } from "victory";
const ChartContent = styled.div`
  width: 400px;
  height: 400px;
  flex: 1;
`;

export const Chart = ({ tasks }: IChart) => {
  const dataChart: any[] = []; 
  tasks.forEach((e: any) => {
    dataChart.push({ y: e.time.getMinutes(), x: e.time.getDate() }); 
  });
  return (
    <TaskerContent>
      <ChartContent>
        <svg viewBox="0 0 450 350">
          <g transform={"translate(0, 40)"}>
            <VictoryAxis scale="time" standalone={false} />
            <VictoryAxis
              dependentAxis  
              orientation="left"
              scale={{ x: "time", y: "time" }}
              standalone={false}
            />
            <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
              data={dataChart} 
              scale={{ x: "time", y: "time" }}
              standalone={false}
            />
          </g>
        </svg>
      </ChartContent>
    </TaskerContent>
  );
};
