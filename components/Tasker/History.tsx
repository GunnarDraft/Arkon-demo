import styled from "styled-components";
const Div = styled.div``;

export const History = ({ tasks }: any) => {
  return (
    <Div>
      {tasks &&
        tasks.map((task: any) => {
          return <div key={task?.id}></div>;
        })}
    </Div>
  );
};
