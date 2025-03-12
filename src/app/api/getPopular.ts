import { Blog } from "@/types/blog";

export const getPopular = async (size: number = 3) => {
  const response = await fetch(
    `https://lavishverse-us.backendless.app/api/data/blogs?pageSize=3&sortBy=%60totalView%60%20desc`
  );
  const blogs: Blog[] = await response.json();
  return blogs;
};