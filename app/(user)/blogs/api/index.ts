import axios from "axios";
import { Blog } from "../types";

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get<Blog[]>("/blogs.json"); 
  return response.data;
};
