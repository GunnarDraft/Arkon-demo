import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const TimerContent = styled.div``;

export const Timer: FC<ITask> = ({ time, status, nextTask }: any) => {
  //reloj
  //estado inmutable


  return (
    <TimerContent> 
      {status}
    </TimerContent>
  );
};
