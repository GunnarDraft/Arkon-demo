import { IconButton, TextField } from "@material-ui/core";
import { Delete, Edit,
   PlayCircleOutlineRounded as Play,
   PauseCircleOutlineRounded as Pause,
   RefreshRounded as Refresh} from "@material-ui/icons";
import React, { FC } from "react";
import { TextFlex, FlexLi, FlexUl } from "../../styles/Components";
import { Timer } from "./Timer";
export interface ITask {
  id?: string | number;
  body?: string;
}
export interface ITasks {
  tasks?: ITask[];
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
}

export const ListofTasks: FC<ITasks> = ({
  tasks,
  onDelete,
  onEdit,
}: ITasks) => {
  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <FlexUl>
      {tasks &&
        tasks.map((task: any) => {
          return (
            <FlexLi key={task.id}>
              <IconButton children={<Play />} onClick={() => onEdit(task.id)} />
              {false ? (
                <TextFlex>{task.body}</TextFlex>
              ) : (
                <>
                  <TextField
                    label="Outlined"
                    variant="outlined"
                    margin="dense"
                    error={true}
                    value={task.body}
                  />
                  <TextField
                    label="Outlined"
                    variant="outlined"
                    margin="dense"
                    type="number"
                    error={true}
                    value={task.time}
                  />
                  <Timer time={task.time} />
                </>
              )}
              <IconButton children={<Pause />} onClick={() => onEdit(task.id)} />
              <IconButton
                children={<Refresh />}
                onClick={() => onDelete(task.id)}
              />
              <IconButton children={<Edit />} onClick={() => onEdit(task.id)} />
              <IconButton
                children={<Delete />}
                onClick={() => onDelete(task.id)}
              />
            </FlexLi>
          );
        })}
    </FlexUl>
  );
};
