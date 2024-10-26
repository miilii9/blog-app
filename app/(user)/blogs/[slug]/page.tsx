import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const BlogDetail = dynamic(() => import("./components/blog-detail"));

export const metadata: Metadata = {
  title: "بلاگ",
  description: "جزییات بلاگ",
};
const page = () => {
  return <BlogDetail />;
};

export default page;
