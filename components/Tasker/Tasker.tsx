import { useEffect, useState } from "react";
import { ListofTasks } from "./ListofTasks";
import { AddTask } from "./AddTask";
import { TaskerContent } from "../../styles/Components";
import { History } from "./History";

//default data test
const defaultTempData = [
  { id: 1213, body: "test", time: 20, status: "complete" },
  { id: 123123, body: "test", time: 20, status: "complete" },
  { id: 121123123313, body: "test", time: 10, status: "complete" },
  { id: 11222213, body: "test", time: 10, status: "complete" },
  { id: 122622213, body: "test", time: 10, status: "inprocess" },
  { id: 126213, body: "test", time: 10, status: "todo" },
  { id: 2233, body: "test", time: 10, status: "todo" },
  { id: 633, body: "test", time: 10, status: "todo" },
  { id: 6666, body: "test", time: 10, status: "todo" },
  { id: 166213, body: "test3", time: 10, status: "todo" },
  { id: 126613, body: "test2", time: 10, status: "todo" },
  { id: 1266613, body: "test2", time: 10, status: "todo" },
  { id: 16213, body: "test11", time: 10, status: "todo" },
];

//vista contenedora
export const Tasker = () => {
  const [getTasks, setTasks] = useState<ITask[]>(defaultTempData);
  const [onEdit, setEdit] = useState<string>("");
  const [getNextTask, setNextTask] = useState(getTasks[0]);

  const deleteTask = (id: any) => {
    const tempTask = getTasks.filter((task: any) => task.id !== id);
    setTasks(tempTask);
  };

  const editTask = (id: any) => {
    if (onEdit === id) return setEdit("");
    setEdit(id);
  };
  const cancel = () => {
    setEdit("");
  };
  //function add and existant
  const addTask = (task: ITask) => {
    setTasks([task, ...getTasks]);
  };
  const save = (id: any) => {
    const tempTask = getTasks.find((task: any) => task.id === id);
    // setTasks(tempTask);
  };
  const play = (task: ITask) => {
    // task.state
    // task.time
    // setTasks(tempTask);
  };
  const [getClock, setClock] = useState(0);
  //actualizacion

  //realoj base

  useEffect(() => {
    const inter = setInterval(() => {
      if (getClock && getClock > 0) return setClock(getClock - 1);
    }, 1000);
    return () => clearInterval(inter);
  }, []);
  //genereta random from external api
  // const addRandomTask = (task: ITask) => {
  //   console.log(task);
  //   // setTasks([task, ...getTasks]);
  // };
  return (
    <TaskerContent>
      <AddTask onAdd={addTask} />
      <ListofTasks
        tasks={getTasks}
        onDelete={deleteTask} 
      />
      <History
        tasks={getTasks} 
      />
    </TaskerContent>
  );
};
