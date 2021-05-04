import { IconButton, TextField } from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  PlayCircleOutlineRounded as PlayIcon,
  PauseCircleOutlineRounded as PauseIcon,
  SaveOutlined as SaveIcon,
  CancelOutlined as CancelIcon,
} from "@material-ui/icons";
import React, { FC, useState, ChangeEvent } from "react";
import { TextFlex, GridContent, FlexData } from "../../styles/Components";
import { GridColDef } from "@material-ui/data-grid";

export const ListofTasks: FC<ITasks> = ({
  tasks,
  onDelete,
  onEdit,
  inEdit,
  onSave,
  onCancel,
}: ITasks) => {
  const [getStatusEdit, setStatusEdit] = useState("");
  const [getTimeEdit, setTimeEdit] = useState("");

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Start", 
      sortable:false,
      disableColumnMenu:true,
      disableClickEventBubbling: true, 
      headerAlign:"center",
      align:"center",
      width: 80,  
      renderCell: () =>
        true ? (
          <IconButton children={<PlayIcon />} />
        ) : (
          <IconButton children={<PauseIcon />} />
        ),
    },
    {
      field: "task",
      headerName: "task",
      flex: 1,
      renderCell: (task: ITask & any) =>
        task.id === inEdit.id ? (
          <TextField
            label="task"
            variant="outlined"
            value={inEdit.task}
            defaultValue={task.getValue("task")}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStatusEdit(e.target.value)
            }
          />
        ) : (
          <TextFlex>{task.getValue("task")}</TextFlex>
        ),
    },
    {
      field: "time",
      headerName: "time",  
      flex: 1,
      renderCell: (task: ITask & any) =>
        task.id === inEdit.id ? (
          <TextField
            label="time"
            variant="outlined"
            type="number"
            error={false}
            value={inEdit.time}
            defaultValue={task.getValue("time")}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTimeEdit(e.target.value)
            }
          />
        ) : (
          <TextFlex>{task.getValue("time")}</TextFlex>
        ),
    },
    {
      field: "actions",
      headerName: "Acction",
      filterable: false,
      disableClickEventBubbling: true,
      width: 120, 
      sortable:false,
      disableColumnMenu:true,
      headerAlign:"center",
      align: "center",
      renderCell: (task) =>
        task.id === inEdit.id ? (
          <>
            <IconButton
              children={
                <SaveIcon
                  onClick={() => onSave({ getStatusEdit, getTimeEdit })}
                />
              }
            />
            <IconButton children={<CancelIcon onClick={() => onCancel()} />} />
          </>
        ) : (
          <>
            <IconButton children={<EditIcon />} onClick={() => onEdit(task)} />
            <IconButton
              children={<DeleteIcon />}
              onClick={() => onDelete(task.id)}
            />
          </>
        ),
    },
  ];

  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <GridContent>
      <FlexData
        rows={tasks.filter((task) => task.status === "todo")}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        pagination
        density="comfortable"
        {...tasks}
      />
    </GridContent>
  );
};
