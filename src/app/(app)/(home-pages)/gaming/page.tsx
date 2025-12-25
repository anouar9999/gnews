
import { getBlogPosts } from '@/data/data'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const myFont = localFont({
  src: '../../../../../public/fonts/zentry-regular.woff2',
  display: 'swap',
})

const Font = localFont({
  src: '../../../../../public/fonts/Samuel-font-defharo.ttf',
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
      <section className=" bg-gradient-to-br from-neutral-900 via-black to-neutral-900 px-4 py-8 md:py-12 lg:py-16">
        <div className="container">
        

         

          {/* Title */}
          <h1
            style={myFont.style}
              className="special-font mb-6 text-[1rem] leading-[0.9] font-black tracking-tight text-white uppercase md:text-[2rem] lg:text-[4rem]"
          >
            Gaming News
          </h1>

          {/* Description and Stats */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-lg text-neutral-600">
              Discover the latest gaming news, releases, updates, and industry insights from Morocco and around the world.
            </p>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-2xl font-black text-red-600">{gamingPosts.length}</div>
                <div className="text-xs font-medium text-neutral-500 uppercase">Articles</div>
              </div>
              <div className="h-10 w-[1px] bg-neutral-200" />
              <div>
                <div className="text-2xl font-black text-red-600">Daily</div>
                <div className="text-xs font-medium text-neutral-500 uppercase">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Posts Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gamingPosts.length > 0 ? (
            gamingPosts.map((post: any, index: number) => (
              <CategoryPostCard key={post.id || index} post={post} />
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

// Category Post Card
const CategoryPostCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="group relative overflow-hidden bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-red-600/10"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-neutral-100">
        {post.featuredImage && (
          <Image
            src={post.featuredImage.src}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge */}
        {post.category && (
          <div className="absolute top-4 left-4">
            <span
              style={Font.style}
              className="inline-flex items-center gap-1.5 bg-red-600 px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg"
            >
              <span className="h-1 w-1 rounded-full bg-white" />
              {post.category.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          style={myFont.style}
          className="mb-3 line-clamp-2 text-xl leading-tight font-black text-neutral-900 transition-colors duration-300 group-hover:text-red-600"
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {post.excerpt || "Discover the latest insights and updates from the gaming industry."}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            {post.date && (
              <time className="font-medium">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            )}
            {post.timeToRead && (
              <>
                <span>•</span>
                <span>{post.timeToRead}</span>
              </>
            )}
          </div>

          {/* Read more arrow */}
          <div className="flex items-center gap-2 text-sm font-bold text-red-600 transition-transform duration-300 group-hover:translate-x-2">
            <span>Read</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Border animation */}
      <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-red-600" />
    </Link>
  )
}
