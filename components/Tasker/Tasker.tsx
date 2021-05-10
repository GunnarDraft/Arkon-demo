import { useEffect, useState } from "react";
import { ListofTasks } from "./ListofTasks";
import { AddTask } from "./AddTask";
import { TaskerContent, FlexRow, TextTitle } from "../../styles/Components";
import { History } from "./History";
import { Timer } from "./Timer";
import {
  defaultTempData,
  defaultTempHistoryData,
  demoData,
} from "../../api/demo/exampleData";
import { Chart } from "../Tasker/Chart";
export const Tasker = () => {
  const [getTasks, setTasks] = useState<ITask[]>(defaultTempData);
  const [getHistoryTasks, setHistoryTasks] = useState<ITask[]>(
    defaultTempHistoryData
  );
  const [onEdit, setEdit] = useState<string>("");
  const [getClock, setClock] = useState<Date>(getTasks[0]?.time);
  const [isPlay, setPlay] = useState<boolean>(false);

  //elimina la tarea y la agrega al historial
  const deleteTask = (id: string) => {
    const tempTasks = getTasks.filter((task: ITask) => task.id !== id);
    const tempTask = getTasks.find((task: ITask) => task.id === id);
    setTasks(tempTasks);
    tempTask && setHistoryTasks([tempTask, ...getHistoryTasks]);
  };
  //selecciona la tarea a editar
  const editTask = (id: string) => {
    if (onEdit === id) return setEdit("");
    setEdit(id);
  };
  //cancela la edicion en curso
  const cancel = () => {
    setEdit("");
  };
  //añade la nueva tarea junto con las anteriores
  const addTask = (task: ITask) => {
    setTasks([...getTasks, task]);
  };

  //guarda la tarea editada
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
  //reinicia el reloj
  const restore = () => {
    setPlay(false);
    getTasks && setClock(getTasks[0]?.time);
  };
  //añade datos de prueba
  const addData = () => {
    setHistoryTasks(demoData);
  };

  const onComplete = () => {
    let tempTasks = getTasks;
    let tempTask = getTasks[0];

    getClock.getMinutes() > 0 &&
      getClock.getSeconds() > 0 &&
      tempTask.time.setMinutes(
        tempTask.time.getMinutes() - getClock.getMinutes()
      );
    tempTask.time.setSeconds(
      tempTask.time.getSeconds() - getClock.getSeconds()
    );
    setHistoryTasks([tempTask, ...getHistoryTasks]);
    tempTasks.shift();
    setTasks(tempTasks);
  };
  //evento de play validacion de reloj
  useEffect(() => {
    if (isPlay) {
      let tempDate = new Date();
      tempDate.setMinutes(getClock.getMinutes());
      tempDate.setSeconds(getClock.getSeconds() - 1);
      const timer =
        getClock.getMinutes() > 0 &&
        getClock.getSeconds() >= 0 &&
        setInterval(() => setClock(tempDate), 1000);

      getClock.getMinutes() === 0 &&
        getClock.getSeconds() === 0 &&
        onComplete();
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
          onFinish={onComplete}
        />
      </TaskerContent>
      <History tasks={getHistoryTasks} addData={addData} />
      <Chart tasks={getHistoryTasks}/>
    </FlexRow>
  );
};
