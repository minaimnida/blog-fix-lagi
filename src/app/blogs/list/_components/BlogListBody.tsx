import { FC } from "react";
import { Blog } from "@/types/blog";
import BlogCard from "../../_components/BlogCard";

interface BlogListBodyProps {
  isPending: boolean;
  blogs?: Blog[];
}

const BlogListBody: FC<BlogListBodyProps> = ({ isPending, blogs }) => {
  return (
    <section className="container mx-auto mt-12">
      {/* Loading State */}
      {isPending && (
        <div className="flex justify-center items-center h-[50vh] col-span-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
        </div>
      )}

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs?.map((blog) => (
          <BlogCard key={blog.objectId} blog={blog} />
        ))}
      </div>

      {/* No Blogs Available */}
      {!isPending && blogs?.length === 0 && (
        <div className="text-center col-span-4 py-12">
          <p className="text-gray-500 text-lg">No blogs available yet.</p>
        </div>
      )}
    </section>
  );
};

export default BlogListBody;
