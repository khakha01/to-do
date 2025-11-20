export interface Todo {
  id: number;
  title: string;
  description?: string;
  status: StatusTodo;
  important?: boolean;
  created_at: string
}

export interface CreateTodoDTO {
  title: string;
}

export interface UpdateTodoDTO {
  title?: string;
  description?: string;
  important?: boolean;
  status?:StatusTodo;
}


export type StatusTodo = 'Pending' | 'Completed' ;