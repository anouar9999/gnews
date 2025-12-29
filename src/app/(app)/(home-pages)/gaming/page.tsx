import { getBlogPosts } from '@/data/data'
import localFont from 'next/font/local'
import React from 'react'
import HorizontalPostCard from '@/components/HorizontalPostCard'

const myFont = localFont({
  src: '../../../../../public/fonts/zentry-regular.woff2',
  display: 'swap',
})

const GamingPage: React.FC = async () => {
  const blogPosts = await getBlogPosts()

  // Filter posts by gaming category
  const gamingPosts = blogPosts.filter(
    (post: any) => post.category?.title?.toLowerCase() === 'gaming'
  )

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="mx-auto mb-12 mt-10  px-4 sm:px-6 lg:px-8">
        <div className="container text-center mx-auto">
          {/* Title */}
          <h1
            style={myFont.style}
              className="text-red-600 special-font mb-2 text-[1rem] leading-[0.9] font-black tracking-tight  uppercase md:text-[1rem] lg:text-[4rem]"
          >
            Gaming News
          </h1>
          <p className="font-semibold text-md text-neutral-600 text-center">
              Discover the latest gaming news, releases, updates, and industry insights from Morocco and around the world.
            </p>
          {/* Description and Stats */}
          <div className="pb-4  border-neutral-200 border-b-2 "></div>
        </div>
      </section>

      {/* Posts List */}
      <section className="container py-4 md:py-8">
        <div className="space-y-6">
          {gamingPosts.length > 0 ? (
            gamingPosts.map((post: any, index: number) => (
              <HorizontalPostCard key={post.id || index} post={post} accentColor="red" />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <span className="mb-4 block text-6xl opacity-20">🎮</span>
              <h3 className="mb-2 text-2xl font-black text-neutral-900">No Gaming Posts Yet</h3>
              <p className="text-neutral-600">Check back soon for the latest gaming news!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default GamingPage
