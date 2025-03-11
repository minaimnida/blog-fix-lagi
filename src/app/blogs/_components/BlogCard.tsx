import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import myImageLoader from "../../../../my/image/loader";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group block">
      <Card className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Image Section */}
        <CardHeader className="p-0 relative">
          <div className="relative w-full h-[220px] overflow-hidden">
            <Image
              loader={myImageLoader}
              src={blog.thumbnail}
              alt="Blog Thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </CardHeader>

        {/* Content Section */}
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            {blog.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {blog.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
