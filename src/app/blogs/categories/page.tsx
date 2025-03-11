import { getBlogByCategory } from "@/app/blogs/_api/getBlogByCategory";
import BlogCard from "@/app/blogs/_components/BlogCard";

const CategoryDetailPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const blogCategory = (await params).category;
  const blogs = await getBlogByCategory(blogCategory);

  return (
    <main className="teko-300 min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 capitalize">
          {blogCategory} Articles
        </h1>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.objectId}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-10">
            No articles found in this category.
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryDetailPage;
