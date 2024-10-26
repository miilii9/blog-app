import React from "react";

type BlogHeaderProps = {
  content: string;
};

const BlogHeader = React.memo(({ content }: BlogHeaderProps) => (
  <h1
    className="text-2xl font-bold"
    dangerouslySetInnerHTML={{ __html: content }}
  ></h1>
));

BlogHeader.displayName = "BlogHeader";

export default BlogHeader;
