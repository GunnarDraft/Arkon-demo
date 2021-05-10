import React, { ChangeEvent, FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import {
  GridContent,
  ButtonPrimary,
  TextInput,
  Form,
} from "../../styles/Components";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MenuItem } from "@material-ui/core";
const defaultTimes = [
  {
    value: 29,
    label: "30min",
  },
  {
    value: 44,
    label: "45min",
  },
  {
    value: 59,
    label: "1h",
  },
];

export const AddTask = ({ onAdd }: any) => {
  const [getTask, setTask] = useState<string>("");
  let tempDate = new Date();
  tempDate.setMinutes(0);
  tempDate.setSeconds(0);
  const [selectedDate, handleDateChange] = useState(tempDate);
  const [getTime, setTime] = useState("");

  //valida y agrega una nueva tarea
  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedDate && getTask.length > 0) {
      const newTodo = {
        id: nanoid(),
        task: getTask,
        time: selectedDate,
        status: 0,
      };
      onAdd(newTodo);
      setTask("");
    }
  };
  const handleChange = (e: any) => {
    setTime(e.target.value);
    let tempDate = new Date();
    tempDate.setHours(0);
    tempDate.setSeconds(59);
    let temp = defaultTimes.find((time) => time.value === e.target.value);
    tempDate.setMinutes(temp?.value);
    handleDateChange(tempDate);
  };
  return (
    <GridContent>
      <Form onSubmit={handleSubmit}>
        <TextInput
          value={getTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
          error={getTask?.length === 0}
          label="Tarea"
          variant="outlined"
          margin="dense"
          type="text"
          fullWidth
        />  
        <TextInput
          select
          label="Tiempo"
          variant="outlined"
          value={getTime}
          fullWidth
          onChange={handleChange}
          margin="dense"
        >
          {defaultTimes.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextInput> 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            ampm={false}
            openTo="minutes"
            views={["minutes", "seconds"]}
            format="mm:ss"
            label="Tiempo"
            inputVariant="outlined"
            margin="dense"
            fullWidth
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </Form>
      <ButtonPrimary onClick={handleSubmit} color="primary" variant="outlined">
        Agregar Tarea
      </ButtonPrimary>
    </GridContent>
  );
};
