import { Suspense } from "react";
import Jumbotron from "./_components/Jumbotron";
import SkeletonCard from "./_components/BlogListSkeleton";
import BlogList from "./_components/BlogList";
import BlogListRecent from "../_components/BlogListRecent";


const Blogs = async () => {
  return (
    <main>
      <Jumbotron />
      <Suspense fallback={<SkeletonCard />}>
        <BlogList />
      </Suspense>
    </main>
  );
};

export default Blogs;