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

const EsportsPage: React.FC = async () => {
  const blogPosts = await getBlogPosts()

  // Filter posts by esports category
  const esportsPosts = blogPosts.filter(
    (post: any) => post.category?.title?.toLowerCase() === 'esports'
  )

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-neutral-900 px-4 py-8 md:py-12 lg:py-16">
        {/* Background Effects */}
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="relative z-10 container">
          <div className="w-full flex justify-between gap-8">
           <div>
 {/* Title */}
            <h1
              style={myFont.style}
              className="special-font mb-6 text-[1rem] leading-[0.9] font-black tracking-tight text-white uppercase md:text-[2rem] lg:text-[4rem]"
            >
              Esports
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Follow the competitive gaming scene with tournament coverage, team updates, player profiles, and esports industry news.
            </p>
           </div>

           

            {/* Stats */}
            <div className="mt-8 flex items-end justify-end gap-8">
              <div>
                <div className="text-3xl font-black text-yellow-600">{esportsPosts.length}</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wider">Articles</div>
              </div>
              <div className="h-12 w-[1px] bg-neutral-700" />
              <div>
                <div className="text-3xl font-black text-yellow-600">Live</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wider">Coverage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
      </section>

      {/* Posts Grid */}
      <section className="container  py-4 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {esportsPosts.length > 0 ? (
            esportsPosts.map((post: any, index: number) => (
              <CategoryPostCard key={post.id || index} post={post} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <span className="mb-4 block text-6xl opacity-20">🏆</span>
              <h3 className="mb-2 text-2xl font-black text-neutral-900">No Esports Posts Yet</h3>
              <p className="text-neutral-600">Check back soon for the latest esports news!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default EsportsPage

// Category Post Card
const CategoryPostCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="group relative overflow-hidden bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-yellow-600/10"
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
              className="inline-flex items-center gap-1.5 bg-yellow-600 px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg"
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
          className="mb-3 line-clamp-2 text-xl leading-tight font-black text-neutral-900 transition-colors duration-300 group-hover:text-yellow-600"
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
          <div className="flex items-center gap-2 text-sm font-bold text-yellow-600 transition-transform duration-300 group-hover:translate-x-2">
            <span>Read</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Border animation */}
      <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-yellow-600" />
    </Link>
  )
}
