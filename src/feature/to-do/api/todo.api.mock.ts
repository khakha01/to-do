import type { CreateTodoDTO, Todo, UpdateTodoDTO } from "./todo.api.interface";

let todos: Todo[] = [
  {
    id: 1,
    title: "Họp team Review Sprint",
    status: 'Pending',
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Gửi email báo cáo khách hàng",
    status: 'Pending',
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Design lại trang Login",
    status: 'Pending',
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Fix bug hiển thị trên Mobile",
    status: 'Pending',
    created_at: new Date().toISOString(),
  },
];

export const todoApiMock = {
  getTodos: async (): Promise<Todo[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(todos), 500));
  },

  createTodo: async (data: CreateTodoDTO): Promise<Todo> => {
    const newTodo: Todo = {
      id: Date.now(),
      status: 'Pending',
      created_at: new Date().toISOString(),
      ...data,
    };
    return new Promise((resolve) => setTimeout(() => resolve(newTodo), 500));
  },

  updateTodo: async (id: number, data: UpdateTodoDTO): Promise<Todo | null> => {
    const index = todos.findIndex((t) => t.id === id);
    todos[index] = { ...todos[index], ...data };
    return new Promise((resolve) =>
      setTimeout(() => resolve(todos[index]), 500)
    );
  },

  deleteTodo: async (id: number): Promise<boolean> => {
    todos = todos.filter((t) => t.id !== id);
    return new Promise((resolve) => setTimeout(() => resolve(true), 500));
  },
};
