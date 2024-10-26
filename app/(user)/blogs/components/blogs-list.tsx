"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useGetBlogs } from "../hooks/use-get-blogs";
const BlogItem = dynamic(() => import("./blog-item"));
import { Skeleton } from "@/components/ui/skeletons/skletons";

const BlogsList = () => {
  const { isLoading, data } = useGetBlogs();

  return (
    <div className="p-4 w-full h-full flex flex-col justify-center gap-2 items-center">
      <h1 className="text-black font-semibold text-xl">لیست بلاگ ها</h1>
      <div className="grid lg:grid-cols-3 w-full align-middle gap-4  md:grid-cols-2 sm:grid-cols-1">
        {data &&
          data?.map((blogItem, i) => (
            <div
              className="max-w-md mx-auto rounded overflow-hidden shadow-lg "
              key={i}
            >
              <BlogItem data={blogItem} />
            </div>
          ))}
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((item, i) => (
            <Skeleton className="max-w-md min-h-80  rounded" key={i} />
          ))}
      </div>
    </div>
  );
};

export default BlogsList;
