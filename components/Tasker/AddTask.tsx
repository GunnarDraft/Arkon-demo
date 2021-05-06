import { ChangeEvent, FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import {
  GridContent,
  ButtonPrimary,
  TextInput,
  Form,
} from "../../styles/Components";

export const AddTask = ({ onAdd }: any) => {
  const [getTask, setTask] = useState<string>('');
  const [getTime, setTime] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (getTime > 0 && getTask.length > 0) {
      const newTodo = {
        id: nanoid(),
        task: getTask,
        time: getTime,
        status: 0,
      };
      onAdd(newTodo);
      setTask('');
      setTime(0);
    }
  };
  return (
    <GridContent>
      <Form onSubmit={handleSubmit}>
        <TextInput
          label="Tarea"
          variant="outlined"
          margin="dense"
          error={getTask?.length === 0}
          value={getTask}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
        />
        <TextInput
          label="Tiempo"
          variant="outlined"
          margin="dense"
          error={getTime <= 0}
          value={getTime}
          type="number"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={(e: any) => setTime(e.target.value)}
        />
      </Form>
      <ButtonPrimary onClick={handleSubmit} color="primary" variant="outlined">
        Agregar Tarea
      </ButtonPrimary>
    </GridContent>
  );
};
