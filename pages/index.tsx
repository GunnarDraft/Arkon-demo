import { ListofTasks } from "../components/ListofTasks";
import { AddTask } from "../components/AddTask";
import { Timer } from "../components/Timer";
import { Chart } from "../components/Chart";
import { useState } from "react";

export type ITask = {
  id?: string | number;
  body?: string;
};

export default function Home() {
  const [getTasks, setTasks] = useState<ITask[]>([]);

  const deleteTask = (id: any) => {
    const tempTask = getTasks.filter((task: any) => task.id !== id);
    setTasks(tempTask);
  };

  const editTask = (id: any) => {
    console.log(id);
    // const tempTask = getTasks.filter((task: any) => task.id !== id);
    // setTasks(tempTask);
  };

  const addTask = (task: ITask) => {
    console.log(task);
    setTasks([task, ...getTasks]);
  };

  return (
    <>
      <Timer />
      <AddTask onAdd={addTask} />
      <ListofTasks tasks={getTasks} onDelete={deleteTask} onEdit={editTask} />
      <Chart />
    </>
  );
}
