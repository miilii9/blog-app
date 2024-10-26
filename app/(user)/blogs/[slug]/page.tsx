import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const DynamicBlogDetail = dynamic(() => import("./components/blog-detail"));

export const metadata: Metadata = {
  title: "بلاگ",
  description: "جزییات بلاگ",
};
const page = () => {
  return <DynamicBlogDetail />;
};

export default page;
