import { useState } from "react";
import { nanoid } from "nanoid";
import { TaskerItem, ButtonPrimary, TextInput } from "../../styles/Components";

export const AddTask = ({ onAdd }: any) => {
  const [getTask, setTask] = useState<string>("");
  const [getTime, setTime] = useState<number>(30);

  const handleSubmit = (e: any) => { 
    e.preventDefault(); 
    if (!!getTask || !!getTime) {
      console.log({getTime,getTask})
      const newTodo = {
        id: nanoid(),
        task: getTask,
        time: getTime,
        status:'todo',
      };
      onAdd(newTodo);
      setTask("");
      setTime(0);
    }
  };
  return (
    <TaskerItem>
      <TextInput
        label="Tarea"
        variant="outlined"
        margin="dense"
        error={!getTask}
        // helperText={"error"}
        value={getTask}
        onChange={(e: any) => setTask(e.target.value)}

      />
      <TextInput
        label="Tiempo"
        variant="outlined"
        margin="dense"
        error={getTime <= 0}
        // helperText={"error"}
        value={getTime}
        onChange={(e: any) => setTime(e.target.value)}
        type="number"
      />
      <ButtonPrimary onClick={handleSubmit} color="primary" variant="outlined">
        Add Task
      </ButtonPrimary>
    </TaskerItem>
  );
};
