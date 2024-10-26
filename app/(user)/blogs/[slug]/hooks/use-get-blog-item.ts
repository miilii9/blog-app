"use client";
import { useQuery } from "@tanstack/react-query";
import { getBlogIttem } from "../api/get-blog-items";
type useGetBlogsProps = string;

export const useGetBlogItem = (slug: useGetBlogsProps) => {
  return useQuery({
    queryKey: ["blogItem"],
    queryFn: () => getBlogIttem({ slug }),
    enabled: true,
  });
};
