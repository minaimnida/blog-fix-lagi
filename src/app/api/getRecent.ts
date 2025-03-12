import { Blog } from "@/types/blog";

export const getRecent = async () => {
  const response = await fetch(
    `https://lavishverse-us.backendless.app/api/data/blogs?pageSize=3&sortBy=%60created%60%20desc`
  );

  
  const blogs: Blog[] = await response.json();
  return blogs;
};