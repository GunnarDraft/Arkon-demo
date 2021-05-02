import { useState } from "react";
import { ListofTasks } from "./ListofTasks";
import { AddTask } from "./AddTask";
import { TaskerContent } from "../../styles/Components";
//move interface late
export type ITask = {
  id?: string | number;
  body?: string;
};
//default data test
const defaultTempData = [
  { id: 1213, body: "test", time: 30 },
  { id: 123123, body: "test", time: 30 },
  { id: 121123123313, body: "test", time: 30 },
  { id: 11222213, body: "test", time: 30 },
  { id: 122622213, body: "test", time: 30 },
  { id: 126213, body: "test", time: 30 },
  { id: 2233, body: "test", time: 30 },
  { id: 633, body: "test", time: 30 },
  { id: 6666, body: "test", time: 30 },
  { id: 166213, body: "test3", time: 30 },
  { id: 126613, body: "test2", time: 30 },
  { id: 1266613, body: "test2", time: 30 },
  { id: 16213, body: "test11", time: 30 },
];

//vista contenedora
export const Tasker = () => {
  const [getTasks, setTasks] = useState<ITask[]>(defaultTempData);

  const deleteTask = (id: any) => {
    const tempTask = getTasks.filter((task: any) => task.id !== id);
    setTasks(tempTask);
  };

  const editTask = (id: any) => {
    console.log(id);
    // const tempTask = getTasks.filter((task: any) => task.id !== id);
    // setTasks(tempTask);
  };
  //function add and existant
  const addTask = (task: ITask) => {
    console.log(task);
    setTasks([task, ...getTasks]);
  };
  //genereta random from external api
  // const addRandomTask = (task: ITask) => {
  //   console.log(task);
  //   // setTasks([task, ...getTasks]);
  // };
  return (
    <TaskerContent>
      <AddTask onAdd={addTask} />
      <ListofTasks tasks={getTasks} onDelete={deleteTask} onEdit={editTask} />
    </TaskerContent>
  );
};
