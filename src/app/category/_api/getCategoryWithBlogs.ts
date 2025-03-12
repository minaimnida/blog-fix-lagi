import { Blog } from "@/types/blog";
import { category } from "@/types/category";

export const getCategoryWithBlogs = async () => {
  const response = await fetch(
    `https://lavishverse-us.backendless.app/api/data/category?loadRelations=blogs`
  );
  const category: category[] = await response.json();
  return category;
};