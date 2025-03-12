import React, { Suspense } from 'react'
import { getPopular } from './api/getPopular'
import JumboBigTron from './_components/JumboBigTron'
import SkeletonCard from './blogs/_components/BlogListSkeleton'
import BlogListRecent from './_components/BlogListRecent'

const Blogs = async () => {
  const blogs = await getPopular()
  return (
    <main>
      <JumboBigTron />
      <Suspense fallback = {<SkeletonCard />}>
      <BlogListRecent />      
      </Suspense>
    </main>
  )
}

export default Blogs
