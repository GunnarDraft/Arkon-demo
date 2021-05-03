import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { nanoid } from "nanoid";
import { TaskerItem } from "../../styles/Components";

export const AddTask = ({ onAdd }: any) => {
  const [getTask, setTask] = useState<string>("");
  const [getTime, setTime] = useState<number>(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!!getTask || !!getTime) {
      console.log("true");

      const newTodo = {
        id: nanoid(),
        body: getTask,
        time: getTime,
      };
      onAdd(newTodo);
      setTask("");
      setTime(0);
    }
  };
  return (
    <TaskerItem>
      <TextField
        label="Tarea"
        variant="outlined"
        margin="dense"
        value={getTask}
      />
      <TextField
        label="Tiempo"
        variant="outlined"
        margin="dense"
        value={getTime}
        type="number"
      />
      <Button onClick={handleSubmit} color="primary" variant="outlined">
        Add Task
      </Button>
    </TaskerItem>
  );
};
