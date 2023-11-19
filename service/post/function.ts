import axios from 'axios';
import { GetPostsResponse } from './type';

export const getPosts = async (): Promise<GetPostsResponse[]> => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};
