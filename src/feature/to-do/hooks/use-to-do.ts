import { useEffect, useState } from "react";
import type {
  CreateTodoDTO,
  Todo,
  UpdateTodoDTO,
} from "../api/todo.api.interface";
import { todoService } from "../api/todo.service";

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await todoService.getTodos();
    setTodos(res);
    setLoading(false);
  };

  const addTodo = async (data: CreateTodoDTO) => {
    const res = await todoService.createTodo(data);
    setTodos((prev) => [...prev, res]);
  };

  const updateTodo = async (id: number, data: UpdateTodoDTO) => {
    const res = await todoService.updateTodo(id, data);
    if (!res) return;
    setTodos((prev) => prev.map((t) => (t.id === id ? res : t)));
  };

  const deleteTodo = async (id: number) => {
    await todoService.deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const load = async () => {
      await fetchTodos();
    };
    load();
  }, []);

  return { todos, loading, addTodo, updateTodo, deleteTodo };
}
