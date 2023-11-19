import { Todo } from "../../domain/todo";
import { GetTodosResponse } from "./type";

export const getTodosSelector = (data: GetTodosResponse): Todo[] => {
  return data;
};
