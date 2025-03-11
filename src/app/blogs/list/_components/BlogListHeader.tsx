import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";

interface BlogListHeaderProps {
  category: string;
  setCategory: (value: string) => void;
  setSearch: (value: string) => void;
}

const BlogListHeader: FC<BlogListHeaderProps> = ({
  category,
  setCategory,
  setSearch,
}) => {
  return (
    <section className="mt-16 w-full max-w-lg mx-auto flex flex-col md:flex-row items-center gap-4">
      {/* Search Bar */}
      <Input
        placeholder="Search blogs..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-[60%] px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition"
        aria-label="Search blogs"
      />

      {/* Category Dropdown */}
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full md:w-[40%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="life">Life</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="technology">Technology</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default BlogListHeader;
