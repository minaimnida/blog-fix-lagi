import React, { FC } from "react";
import { getBlog } from "../../../api/getBlog";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogHeaderProps {
  slug: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  const blog = blogs[0];

  return (
    <section className="container mx-auto p-6 max-w-3xl">
      {/* Category Badge */}
      <Badge className="capitalize bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-lg hover:bg-green-700 transition duration-300">
        {blog.category}
      </Badge>

      {/* Blog Title */}
      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        {blog.title}
      </h1>

      {/* Date & Metadata */}
      <p className="mt-2 text-gray-500 text-sm font-light">
        {format(new Date(blog.created), "dd MMM yyyy")}
      </p>

      {/* Link menuju halaman author yang membuat blog */}
      <Link href={`/about/${blog.user.objectId}`}>
        {blogs[0].user.firstName}
      </Link>

      {/* Blog Thumbnail */}
      <div className="relative w-full h-[350px] mt-6 overflow-hidden rounded-xl shadow-lg">
        <Image
          src={blog.thumbnail}
          alt="Blog Thumbnail"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default BlogHeader;
