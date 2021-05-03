import { IconButton, TextField } from "@material-ui/core";
import {
  Delete,
  Edit,
  PlayCircleOutlineRounded as Play,
  PauseCircleOutlineRounded as Pause, 
  SaveOutlined,
  CancelOutlined,
} from "@material-ui/icons";
import React, { FC, useState } from "react";
import { TextFlex, FlexLi, FlexUl } from "../../styles/Components";
import { Timer } from "./Timer";



export const ListofTasks: FC<ITasks> = ({ tasks, onDelete }: ITasks) => {

  const [getEditable, setEditable] = useState<ITask>({ status: "", task: "", time:0 });

  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <FlexUl>
      {tasks &&
        tasks.map((task: any) => {
          return (
            <FlexLi key={task.id}>
              {'' !== task.id ? (
                <IconButton
                  children={<Play />}
                  // onClick={() => onPlay(task.id)}
                />
              ) : (
                <>
                  <IconButton
                    children={<Pause />}
                    // onClick={() => onEdit(task.id)}
                  />
                  {/* <IconButton
                    size="medium"
                    children={<Refresh />}
                    onClick={() => onDelete(task.id)}
                  /> */}
                </>
              )}
              {'2' === task.id ? (
                <>
                  <TextField
                    label="Outlined"
                    variant="outlined"
                    margin="dense"
                    error={true}
                    value={getEditable.task}
                    defaultValue={task.task}
                    onChange={(e: any) => setEditable(e.target.value)}
                  />
                  <TextField
                    label="Outlined"
                    variant="outlined"
                    margin="dense"
                    type="number"
                    error={true}
                    value={getEditable.time}
                    defaultValue={task.time}
                    onChange={(e: any) => setEditable(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextFlex>{task.body}</TextFlex>
                  <TextFlex>{task.time}</TextFlex>
                  <Timer time={task.time} status={task.status}/>
                </>
              )}
              {'' === task.id ? (
                <>
                 <IconButton
                  children={<SaveOutlined />}
                  // onClick={() => onSave(task.id)}
                />
                <IconButton
                  children={<CancelOutlined />}
                  // onClick={() => onCancel()}
                />
                </>
              ) : (
                <>
                   <IconButton
                    children={<Edit />}
                    // onClick={() => onEdit(task.id)}
                  />
                  <IconButton
                    children={<Delete />}
                    onClick={() => onDelete(task.id)}
                  />
                </>
              )}
            </FlexLi>
          );
        })}
    </FlexUl>
  );
};
