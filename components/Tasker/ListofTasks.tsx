import { IconButton, TextField } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { FC } from "react";
import { TextFlex, BoxFlex } from "../../styles/Components";
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
    <ul>
      {tasks &&
        tasks.map((task: any) => {
          return (
            <li key={task.id}>
              <BoxFlex>
                <div>drag</div>
                <IconButton children={<Edit />} />
                {false ? (
                  <TextFlex>{task.body}</TextFlex>
                ) : (
                  <>
                    <TextField
                      label="Outlined"
                      variant="outlined"
                      margin="dense"
                      value={task.body}
                    />
                    <TextField
                      label="Outlined"
                      variant="outlined"
                      margin="dense"
                      value={task.time}
                    />
                  </>
                )}
                <IconButton
                  children={<Edit />}
                  onClick={() => onEdit(task.id)}
                />
                <IconButton
                  children={<Delete />}
                  onClick={() => onDelete(task.id)}
                />
              </BoxFlex>
            </li>
          );
        })}
    </ul>
  );
};
