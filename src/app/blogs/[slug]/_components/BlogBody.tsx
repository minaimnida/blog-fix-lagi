import Markdown from '@/components/Markdown';
import { FC } from 'react';
import IncrementViews from './IncrementViews';
import { getBlog } from '../../_api/getBlog';
import AboutUser from '@/app/about/[id]/_components/AboutUser';


interface BlogBodyProps {
    slug: string;
    user?: {
      firstName: string;
      lastname: string;
      objectId: string
    }
}
const BlogBody: FC <BlogBodyProps> = async ({slug}) => {
    const blogs = await getBlog(slug);
  return (
    
    <section className='container mx-auto p-4'>
      
        <Markdown content={blogs[0].content}/>
        <IncrementViews objectId={blogs[0].objectId} views={blogs[0].views} />

    </section>
  )
}

export default BlogBody;