import { useEffect, useState } from "react";
import { ListofTasks } from "./ListofTasks";
import { AddTask } from "./AddTask";
import { TaskerContent, FlexRow, TextTitle } from "../../styles/Components";
import { History } from "./History";
import { nanoid } from "nanoid";
import { Timer } from "./Timer";
//default data test
const defaultTempData = [
  { id: nanoid(), task: "test1", time: 30 },
  { id: nanoid(), task: "test", time: 60 },
  { id: nanoid(), task: "test0", time: 60 },
  { id: nanoid(), task: "test2", time: 60 },
];
const defaultTempHistoryData = [
  { id: nanoid(), task: "test1", time: 30 },
  { id: nanoid(), task: "test", time: 60 },
  { id: nanoid(), task: "test0", time: 60 },
  { id: nanoid(), task: "test2", time: 60 },
];

//vista contenedora
export const Tasker = () => {
  const [getTasks, setTasks] = useState<ITask[]>(defaultTempData);
  const [getHistoryTasks, setHistoryTasks] = useState<ITask[]>(
    defaultTempHistoryData
  );
  const [onEdit, setEdit] = useState<string>("");
  const [getClock, setClock] = useState<number>(0);

  const deleteTask = (id: string) => {
    const tempTask = getTasks.filter((task: ITask) => task.id !== id);
    setTasks(tempTask);
  };

  const editTask = (id: string) => {
    if (onEdit === id) return setEdit("");
    setEdit(id);
  };

  const cancel = () => {
    setEdit("");
  };

  const addTask = (task: ITask) => {
    setTasks([task, ...getTasks]);
  };

  const save = (tasklocal: ITask) => {
    let tempTask = getTasks.findIndex(
      (task: ITask) => task.id === tasklocal.id
    );
    let tempTasks = getTasks;
    if (tempTask !== -1) {
      tempTasks[tempTask] = tasklocal;
      setTasks(tempTasks);
    }
    setEdit("");
  };

  const play = () => {
    setClock(getTasks[0].time);
  };
  const pause = () => {
    setClock(getTasks[0].time);
  };
  const restore = () => {
    setClock(getTasks[0].time);
  };

  useEffect(() => {
    const timer =
      getClock > 0 && setInterval(() => setClock(getClock - 1), 1000);
    return () => clearInterval(timer);
  }, [getClock]);

  return (
    <FlexRow>
      <TaskerContent>
        <TextTitle>
          Lista de Tareas
          <Timer
            time={getClock}
            onPlay={play}
            onPause={pause}
            onRestore={restore}
          ></Timer>
        </TextTitle>
        <AddTask onAdd={addTask} />
        <ListofTasks
          setTasks={setTasks}
          tasks={getTasks}
          onDelete={deleteTask}
          onEdit={editTask}
          inEdit={onEdit}
          onSave={save}
          onCancel={cancel}
        />
      </TaskerContent>
      <History tasks={getHistoryTasks} />
    </FlexRow>
  );
};
