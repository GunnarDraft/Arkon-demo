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
  onSave: (task: any) => void;
  onPlay: (task: any) => void;
  onCancel: () => void;
   inEdit: any;
}
type IHistory = {
  tasks?: ITask[]; 
}

type ITask = {
  id?: string | number;
  task?: string;
  status?: string;
  time?:number;  
};
