type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type ITasks = {
  tasks: ITask[];
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
  onSave: (task: ITask) => void;
  onCancel: () => void;
  onFinish: () => void;
  setTasks?: any;
  inEdit: any;
}
type ITimer = {
  onPlay: () => void;
  onPause: () => void;
  onRestore: () => void;
  isPlay: boolean;
  time: Date;

}
type IItem = {
  i: number;
  task: ITask;
  updatePosition: (i, pos) => void;
  updateOrder: (i, y) => void;
  onDelete: (id) => void;
  onEdit: (id) => void;
  onSave: (task: ITask) => void;
  onCancel: () => void;
  onFinish: () => void;
  inEdit: string;
}
type IHistory = {
  tasks: ITask[];
  addData: () => void;
}
type IChart = {
  tasks: ITask[]; 
}

enum Status {
  todo,
  process,
  done
}
type ITask = {
  id: string | number;
  task: string;
  time: Date; 
  key?: number | string; 
};

type ShortOrder = 'asc' | 'desc';