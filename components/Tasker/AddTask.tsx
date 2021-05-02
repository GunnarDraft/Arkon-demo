import { useState, ChangeEvent } from "react";
import { Button, TextField } from "@material-ui/core";
import { nanoid } from "nanoid";
import { TaskerContent } from "../../styles/Components";

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
    <TaskerContent>
      <form onSubmit={handleSubmit}> 
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
        <Button onClick={handleSubmit} color="primary">
          Add Task
        </Button>
      </form>
    </TaskerContent>
  );
};
