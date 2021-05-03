import { FC } from "react";
import styled from "styled-components";

const TimerContent = styled.div``;

export const Timer: FC<ITask> = ({ status }: any) => {
  //reloj
  //estado inmutable

  return <TimerContent>{status}</TimerContent>;
};
