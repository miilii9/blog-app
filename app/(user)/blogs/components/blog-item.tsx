import React from "react";
import { Blog } from "../types";
import Image from "next/image";
import Link from "next/link";
type blogItemProps = {
  data: Blog;
};
const BlogItem = ({ data }: blogItemProps) => {
  return (
    <Link href={`/blogs/${data.slug}`} className="px-6 pt-4 pb-2 w-full h-full">
      <Image
        style={{ height: "230px" }}
        className="w-full h-96 "
        src={data.featured_media_object.source_url}
        alt={data.featured_media_object.caption}
        height={data.featured_media_object.media_details.height}
        width={data.featured_media_object.media_details.width}
        priority
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{data.title.rendered}</h2>
        <div className="text-gray-700 text-base">
          <p dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
