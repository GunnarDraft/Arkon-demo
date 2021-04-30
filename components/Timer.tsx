import { useState } from "react";
import styled from "styled-components";

const TimerContent = styled.div``;

export const Timer = () => {
  let time = new Date().toLocaleTimeString();
  const [CicleTime, setCicleTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCicleTime(time);
  };
  setInterval(UpdateTime, 1000);
  return <TimerContent>Timer:{time}</TimerContent>;
};
