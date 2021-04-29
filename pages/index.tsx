import { ListofTasks } from '../components/ListofTasks'
import { AddTask } from '../components/AddTask'
import { useState } from 'react';

interface ITasks{
  text?: string,
}

export default function Home() {

  const [getTasks, setTasks] = useState<ITasks[]>([]);

  console.log(getTasks && getTasks.length);

  const deleteTodo = (id: any) => {
    const tempTask = getTasks.filter((todo: any) => todo.id !== id);
    setTasks(tempTask);
  };

  const addTodo = (task: any) => {
    console.log(task);
    setTasks([task, ...getTasks]);
  };

  return <div>
    <AddTask onAdd={addTodo} />
    <ListofTasks tasks={getTasks} onDelete={deleteTodo} />
  </div>
}
