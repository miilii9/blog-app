import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const BlogsList = dynamic(() => import("./components/blogs-list"));

export const metadata: Metadata = {
  title: " بلاگ ها",
  description: " بلاگ ها",
};
const Blogs = () => {
  return <BlogsList />;
};

export default Blogs;
