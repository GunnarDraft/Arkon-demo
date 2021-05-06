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
  isPlay,
  onPause,
  onRestore,
}: ITimer) => {
  return (
    <TimerContent>
      {time}
      {isPlay ? (
        <IconButton
          color="primary"
          children={<PauseIcon />}
          onClick={onPause}
        />
      ) : (
        <IconButton color="primary" children={<PlayIcon />} onClick={onPlay} />
      )}
      <IconButton
        color="primary"
        children={<RestoreIcon />}
        onClick={onRestore}
      />
    </TimerContent>
  );
};
