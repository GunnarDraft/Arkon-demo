type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}

type ITasks = {
  tasks: ITask[];
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
  onSave: (task: ITask) => void;
  onCancel: () => void;
  setTasks?: any;
  inEdit: any;
}
type ITimer = {
  onPlay: () => void;
  onPause: () => void;
  onRestore: () => void;
  isPlay: boolean;
  time: number;

}
type IItem = {
  i: number;
  task: ITask;
  updatePosition: (i, pos) => void;
  updateOrder: (i, y) => void;
  onDelete: (id) => void;
  onEdit: (id) => void;
  inEdit: string;
  onSave: (task: ITask) => void;
  onCancel: () => void;
}
type IHistory = {
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
  time: number;
  key?: number | string;
};

type ShortOrder = 'asc' | 'desc';