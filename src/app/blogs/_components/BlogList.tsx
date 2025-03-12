import { resolve } from "path";
import { getBlogs } from "../../api/getBlogs";
import Blogs from "../page";
import BlogCard from "./BlogCard";

const BlogList = async () => {
  const blogs = await getBlogs();

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return <BlogCard key={blog.objectId} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
