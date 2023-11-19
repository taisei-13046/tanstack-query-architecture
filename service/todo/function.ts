import axios from 'axios';
import {
  GetTodosResponse,
  UpdateTodosRequest,
  UpdateTodosResponse,
} from './type';

export const getTodos = async (): Promise<GetTodosResponse> => {
  const res = await axios.get('/api/todo');
  return res.data;
};

export const updateTodos = async (
  data: UpdateTodosRequest
): Promise<UpdateTodosResponse> => {
  const res = await axios.post(`/api/todo?add=${data}`);
  return res.data;
};
