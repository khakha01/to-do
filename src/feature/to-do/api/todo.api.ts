import axios from "axios";
import type { CreateTodoDTO, Todo, UpdateTodoDTO } from "./todo.api.interface";

const BASE_URL = "/api/todos";

export const todoApi = {
  getTodos: async (): Promise<Todo[]> => {
    const res = await axios.get(BASE_URL);
    return res.data;
  },

  createTodo: async (data: CreateTodoDTO): Promise<Todo> => {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  },

  updateTodo: async (id: number, data: UpdateTodoDTO): Promise<Todo | null> => {
    const res = await axios.post(`${BASE_URL}/${id}`, data);
    return res.data;
  },

  deleteTodo: async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
  },
};
