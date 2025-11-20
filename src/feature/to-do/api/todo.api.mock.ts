import type { CreateTodoDTO, Todo, UpdateTodoDTO } from "./todo.api.interface";
/*
let todos: Todo[] = [
  {
    id: 1,
    title: "Họp team Review Sprint",
    status: "Pending",
    created_at: new Date().toISOString(),
    important: true,
  },
  {
    id: 2,
    title: "Gửi email báo cáo khách hàng",
    status: "Completed",
    created_at: new Date().toISOString(),
    important: false,
  },
  {
    id: 3,
    title: "Design lại trang Login",
    status: "Pending",
    created_at: new Date().toISOString(),
    important: true,
  },
  {
    id: 4,
    title: "Fix bug hiển thị trên Mobile",
    status: "Pending",
    created_at: new Date().toISOString(),
    important: false,
  },
];
*/let todos: Todo[] = loadFromLocalStorage();

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromLocalStorage(): Todo[] {
  const raw = localStorage.getItem("todos");
  return raw ? JSON.parse(raw) : [];
}

export const todoApiMock = {
  getTodos: async (): Promise<Todo[]> => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(todos), 300)
    );
  },

  createTodo: async (data: CreateTodoDTO): Promise<Todo> => {
    const newTodo: Todo = {
      id: Date.now(),
      status: "Pending",
      created_at: new Date().toISOString(),
      ...data,
    };

    todos.push(newTodo);
    saveToLocalStorage();

    return new Promise((resolve) =>
      setTimeout(() => resolve(newTodo), 300)
    );
  },

  getTodoById: async (id: number): Promise<Todo | null> => {
    const todo = todos.find((t) => t.id === id) || null;
    return new Promise((resolve) =>
      setTimeout(() => resolve(todo), 300)
    );
  },

  updateTodo: async (id: number, data: UpdateTodoDTO): Promise<Todo | null> => {
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) return null;

    todos[index] = { ...todos[index], ...data };
    saveToLocalStorage();

    return new Promise((resolve) =>
      setTimeout(() => resolve(todos[index]), 300)
    );
  },

  deleteTodo: async (id: number): Promise<boolean> => {
    todos = todos.filter((t) => t.id !== id);
    saveToLocalStorage();

    return new Promise((resolve) =>
      setTimeout(() => resolve(true), 300)
    );
  },
};
