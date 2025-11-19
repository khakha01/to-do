import { todoApi } from "./todo.api";
import { todoApiMock } from "./todo.api.mock";

const useMock = true;
export const todoService = useMock ? todoApiMock : todoApi;