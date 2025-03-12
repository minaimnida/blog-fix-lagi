import { Blog } from "./blog";

export interface category {
  slug: string;
  description: string;
  title: string;
  blogs: Blog[];
  objectId: string;
}