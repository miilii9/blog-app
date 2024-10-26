import React from "react";

type BlogContentProps = {
  content: string;
};

const BlogContent = React.memo(({ content }: BlogContentProps) => (
  <p className="leading-10" dangerouslySetInnerHTML={{ __html: content }}></p>
));

BlogContent.displayName = "BlogContent";

export default BlogContent;
