import axios from "axios";
import { Blog } from "../../types";
type blogItemProps = {
  slug: string;
};
export const getBlogIttem = async ({ slug }: blogItemProps): Promise<Blog> => {
  const response = await axios.get<Blog[]>("/blogs.json");
  const blogItem = response.data?.find((item) => item.slug === slug);

  if (!blogItem) {
    throw new Error(`Blog with slug "${slug}" not found`);
  }

  return blogItem;
};
