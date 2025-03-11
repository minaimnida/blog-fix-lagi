import { Blog } from "@/types/blog";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getBlogs = async (size: number = 3) => {
  const response = await fetch(
    `https://lavishverse-us.backendless.app/api/data/blogs?pageSize=${size}`
  );
  const blogs: Blog[] = await response.json();

  if (!blogs.length) {
    return notFound();
  }
  return blogs;
};
