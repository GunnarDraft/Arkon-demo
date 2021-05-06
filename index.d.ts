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
  tasks?: ITask[];
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
  onSave: (task: ITask) => void;
  onCancel: () => void;
  setTasks:any;
  inEdit: any;
}
type ITimer = {
  onPlay: () => void;
  onPause: () => void;
  onRestore: () => void;
  time?: number;

}
type IHistory = {
  tasks?: ITask[];
}
enum Status {
  todo,
  process,
  done
}
type ITask = {
  id?: string | number;
  task?: string;
  status?: Status;
  time?: number;
  key?: number | string;
};

type ShortOrder = 'asc' | 'desc';