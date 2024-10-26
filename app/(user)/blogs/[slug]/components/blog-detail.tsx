"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetBlogs } from "../../hooks/use-get-blogs";
import { useGetBlogItem } from "../hooks/use-get-blog-item";
import { gregorianToJalaliWithTime } from "@/utils/dateUtil";
import { Skeleton } from "@/components/ui/skeletons/skletons";
const BlogHeader = dynamic(() => import("./blog-header"));
const BlogContent = dynamic(() => import("./blog-content"));

const BlogDetail = () => {
  const { data } = useGetBlogs();
  const params = useParams<{ slug: string }>();
  const { data: blogItem, isLoading } = useGetBlogItem(params.slug);
  const index = data?.findIndex((item) => item.id === blogItem?.id) || 0;
  let prevPost;
  let nextPost;
  if (data && data?.length > 1 && index !== 0 && index > -1) {
    prevPost = data[index - 1].slug;
  } else {
    prevPost = null;
  }
  if (data && data?.length > 1 && index + 1 !== data?.length && index > -1) {
    nextPost = data[index + 1].slug;
  } else {
    nextPost = null;
  }
  if (!blogItem && !isLoading) {
    return (
      <p className="h-screen m-auto text-3xl text-red-900 font-semibold">
        no data
      </p>
    );
  }

  return !isLoading && blogItem ? (
    <div className="flex flex-col  gap-4 items-start w-2/3 mx-auto min-h-svh border-2 border-gray-200 rounded-2xl border-solid">
      <Image
        className="w-full rounded-t-2xl "
        src={blogItem?.featured_media_object.source_url || ""}
        alt={blogItem?.featured_media_object.caption || "alt image"}
        height={blogItem?.featured_media_object.media_details.height || 300}
        width={blogItem?.featured_media_object.media_details.width || 500}
        quality={40}
        priority
      />
      <div className="flex flex-col gap-4 items-start w-full p-4 justify-between h-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span>تاریخ ایجاد :</span>
            <small>{gregorianToJalaliWithTime(blogItem?.date_gmt || "")}</small>
          </div>
          <div>
            {blogItem?.categories.map((category, i) => (
              <span
                className="p-2 rounded-full bg-indigo-600 text-white"
                key={i}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        <BlogHeader content={blogItem?.title.rendered} />

        <BlogContent content={blogItem?.content.rendered} />
        <div className="w-full flex justify-between items-center mt-40">
          {nextPost && (
            <Link href={`/blogs/${nextPost}`}>
              <span className="text-lg text-blue-700 font-semibold">
                مشاهده پست بعدی
              </span>
            </Link>
          )}
          {!nextPost && (
            <span className="text-lg text-gray-800 font-semibold">
              مشاهده پست بعدی
            </span>
          )}
          {prevPost && (
            <Link href={`/blogs/${prevPost}`}>
              <span className="text-lg text-blue-700 font-semibold">
                مشاهده پست قبلی
              </span>
            </Link>
          )}
          {!prevPost && (
            <span className="text-lg text-gray-800 font-semibold">
              مشاهده پست قبلی
            </span>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col h-full gap-4 items-start w-2/3 mx-auto min-h-svh">
      <Skeleton className="w-full min-h-96  rounded-t-2xl" />
      <Skeleton className="w-full min-h-40  rounded-t-2xl" />
      <Skeleton className="w-full min-h-40  rounded-t-2xl" />
    </div>
  );
};

export default BlogDetail;
