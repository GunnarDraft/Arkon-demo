import { useEffect, useState } from "react";
import { ListofTasks } from "./ListofTasks";
import { AddTask } from "./AddTask";
import { TaskerContent, FlexRow, TextTitle } from "../../styles/Components";
import { History } from "./History";
import { nanoid } from "nanoid";
import { Timer } from "./Timer";
//default data test
const defaultTempData = [{ id: nanoid(), task: "test1", time: 30 }];
const defaultTempHistoryData = [{ id: nanoid(), task: "test2", time: 60 }];

//vista contenedora
export const Tasker = () => {
  const [getTasks, setTasks] = useState<ITask[]>(defaultTempData);
  const [getHistoryTasks, setHistoryTasks] = useState<ITask[]>(
    defaultTempHistoryData
  );
  const [onEdit, setEdit] = useState<string>("");
  const [getClock, setClock] = useState<number>(getTasks[0]?.time ?? 0);
  const [isPlay, setPlay] = useState<boolean>(false);
  const deleteTask = (id: string) => {
    const tempTasks = getTasks.filter((task: ITask) => task.id !== id);
    const tempTask = getTasks.find((task: ITask) => task.id === id);
    setTasks(tempTasks);
    tempTask && setHistoryTasks([tempTask, ...getHistoryTasks]);
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
    setPlay(true);
  };
  const pause = () => {
    setPlay(false);
  };
  const restore = () => {
    setPlay(false);
    getTasks && setClock(getTasks[0]?.time as number);
  };
  const onComplete = () => {
    let tempTasks = getTasks;
    let tempTask = getTasks[0];
    setHistoryTasks([tempTask, ...getHistoryTasks]);
    tempTasks.shift();
    setTasks(tempTasks);
  };

  useEffect(() => {
    if (isPlay) {
      const timer =
        getClock > 0 && setInterval(() => setClock(getClock - 1), 1000);
      getClock === 0 && onComplete();
      if (timer) return () => clearInterval(timer);
    }
  }, [getClock, isPlay]);

  return (
    <FlexRow>
      <TaskerContent>
        <TextTitle>
          Lista de Tareas
          <Timer
            time={getClock}
            onPlay={play}
            isPlay={isPlay}
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
