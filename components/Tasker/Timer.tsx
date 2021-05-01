import { useState } from "react";
import styled from "styled-components";

const TimerContent = styled.div``;

export const Timer = () => {
  //reloj
  //estado mutable
  let time = new Date().toLocaleTimeString();
  //estado inmutable
  const [getClock, setClock] = useState(time);
  //actualizacion
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setClock(time);
  };
  //realoj base
  setInterval(UpdateTime, 1000);

  return <TimerContent>Timer:{getClock}</TimerContent>;
};
