import { useQuery } from '@tanstack/react-query';
import { postKeys } from './key';
import { getPosts } from './function';
import { getPostsSelector } from './selector';

export const useGetPosts = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: postKeys.lists(),
    queryFn: getPosts,
    select: getPostsSelector,
  });

  return {
    data,
    isPending,
    isError,
  };
};
