import { TBlogPost } from '@/data/data'
import { Pagination, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/shared/Pagination'
import localFont from 'next/font/local'
import { FC } from 'react'
import PostCard1 from './PostCard1'

//
interface SectionLatestPostsProps {
  className?: string
  posts: TBlogPost[]
  heading?: string
}
const myFont = localFont({
  src: '../../../public/fonts/zentry-regular.woff2',
  // Or multiple weights:
  // src: [
  //   { path: '/fonts/font-regular.woff2', weight: '400' },
  //   { path: '/fonts/font-bold.woff2', weight: '700' },
  // ],
  display: 'swap',
})
const SectionGridPosts: FC<SectionLatestPostsProps> = ({ className = '', posts, heading = 'Latest articles 🎈' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="">
        <div className="mb-22">
          <h2
            style={myFont.style}
            className="text-[1.5rem] leading-[0.9] font-black tracking-tight text-red-600 uppercase md:text-[1.5rem] lg:text-[1.5rem]"
          >
            blog
          </h2>
          <div className="my-2 h-[1px] w-full bg-neutral-900"/>
        
          <h2
            style={myFont.style}
            className="special-font text-[1rem] leading-[0.9] font-black tracking-tight text-neutral-900 uppercase md:text-[2.5rem] lg:text-[4rem]"
          >
            Latest articles
          </h2>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard1 size="sm" key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-16 flex justify-center md:mt-24">
        <Pagination className="mx-auto">
          <PaginationPrevious href="?page=1" />
          <PaginationList>
            <PaginationPage href="?page=1" current>
              1
            </PaginationPage>
            <PaginationPage href="?page=2">2</PaginationPage>
            <PaginationPage href="?page=3">3</PaginationPage>
            <PaginationPage href="?page=4">4</PaginationPage>
          </PaginationList>
          <PaginationNext href="?page=3" />
        </Pagination>
      </div>
    </div>
  )
}

export default SectionGridPosts
