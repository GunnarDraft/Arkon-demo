import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { ChangeEvent, FC } from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
interface ITask {
  id?: string | number;
  body?: string;
}
interface ITasks {
  tasks?: ITask[];
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
}
export const TextFlex = styled.div`
    display:flex;
    flex:1;
`
export const ListofTasks: FC<ITasks> = ({tasks, onDelete, onEdit}: ITasks) => {
  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <>
      {tasks &&
        tasks.map((task: any) => {
          return (
            <div key={task.id}>
              <TextFlex>{task.body}</TextFlex> 
              {/* <TextField
                variant="filled"
                value={task.body}
                
              />
                <TextField
                variant="filled"
                value={task.body}
                
              /> */}
              <IconButton children={<Edit />} onClick={() => onEdit(task.id)} />
              <IconButton children={<Delete />} onClick={() => onDelete(task.id)}
              />
            </div>
          );
        })}
    </>
  );
};
