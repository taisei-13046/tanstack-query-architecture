import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { todoKeys } from './key';
import { getTodos, updateTodos } from './function';
import { getTodosSelector } from './selector';

export const useGetTodos = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: todoKeys.lists(),
    queryFn: getTodos,
    select: getTodosSelector,
  });

  return {
    data,
    isPending,
    isError,
  };
};

export const useUpdateTodos = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateTodos,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() }),
  });

  return { mutate };
};
