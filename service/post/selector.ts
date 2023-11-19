import { Post } from "../../domain/post";
import { GetPostsResponse } from "./type";

export const getPostsSelector = (data: GetPostsResponse[]): Post[] => {
  return data.slice(0, 10);
};
