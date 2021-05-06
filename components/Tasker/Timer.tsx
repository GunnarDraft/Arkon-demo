import React, { FC } from "react";
import styled from "styled-components";
import {
  PlayCircleOutlineRounded as PlayIcon,
  Restore as RestoreIcon,
  Pause as PauseIcon,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
const TimerContent = styled.div``;

export const Timer: FC<ITimer> = ({
  time,
  onPlay,
  onPause,
  onRestore,
}: ITimer) => {
  return (
    <TimerContent>
      {time}
      <IconButton children={<PlayIcon />} onClick={onPlay} />
      <IconButton children={<PauseIcon />} onClick={onPause} />
      <IconButton children={<RestoreIcon />} onClick={onRestore} />
    </TimerContent>
  );
};
