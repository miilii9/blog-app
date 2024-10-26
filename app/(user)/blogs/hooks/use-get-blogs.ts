"use client";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
    enabled: true,
  });
};
