import { useEffect, useState } from "react";
import { ListofTasks } from "./ListofTasks";
import { AddTask } from "./AddTask";
import { TaskerContent } from "../../styles/Components";
import { History } from "./History";

//default data test
const defaultTempData = [
  { id: 1213, task: "test", time: 30, status: "compldoneete" },
  { id: 123123, task: "test", time: 60, status: "done" },
  { id: 121123123313, task: "test", time: 45, status: "done" },
  { id: 11222213, task: "test", time: 45, status: "done" },
  { id: 122622213, task: "test", time: 60, status: "inprocess" },
  { id: 126213, task: "test", time: 60, status: "todo" },
  { id: 2233, task: "test", time: 45, status: "todo" },
  { id: 633, task: "test", time: 30, status: "todo" },
  { id: 6666, task: "test", time: 30, status: "todo" },
  { id: 166213, task: "test3", time: 30, status: "todo" },
  { id: 126613, task: "test2", time: 45, status: "todo" },
  { id: 1266613, task: "test2", time: 60, status: "todo" },
  { id: 16213, task: "test11", time: 30, status: "todo" },
];

//vista contenedora
export const Tasker = () => {
  const [getTasks, setTasks] = useState<ITask[]>(defaultTempData);
  const [onEdit, setEdit] = useState<string>("");
  // const [getNextTask, setNextTask] = useState(getTasks[0]);

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
  const save = (tasklocal: any) => {
    const tempTask = getTasks.findIndex(
      (task: any) => task.id === tasklocal.id
    );
    let tempTasks = getTasks;
    tempTasks[tempTask] = tasklocal;
    setTasks(tempTasks);
  };
  // const play = (task: ITask) => {
  //   task.state
  //   task.time
  //   setTasks(tempTask);
  // };
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
        onEdit={editTask}
        inEdit={onEdit}
        onSave={save}
        onCancel={cancel}
      />
      <History tasks={getTasks} />
    </TaskerContent>
  );
};
