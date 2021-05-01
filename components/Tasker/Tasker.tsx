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
const defaultTempData = [{ id: 1213, body: "test" }];

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
