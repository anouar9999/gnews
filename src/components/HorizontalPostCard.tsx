import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/zentry-regular.woff2',
  display: 'swap',
})

const Font = localFont({
  src: '../../public/fonts/Samuel-font-defharo.ttf',
  display: 'swap',
})

interface HorizontalPostCardProps {
  post: any
  accentColor?: string
}

const HorizontalPostCard: React.FC<HorizontalPostCardProps> = ({
  post,
  accentColor = 'red'
}) => {
  // Map accent color to Tailwind classes
  const colorClasses = {
    red: {
      hover: 'hover:shadow-red-600/10',
      badge: 'bg-red-600',
    },
    yellow: {
      hover: 'hover:shadow-yellow-600/10',
      badge: 'bg-yellow-600',
    },
    blue: {
      hover: 'hover:shadow-blue-600/10',
      badge: 'bg-blue-600',
    },
    purple: {
      hover: 'hover:shadow-purple-600/10',
      badge: 'bg-purple-600',
    },
    green: {
      hover: 'hover:shadow-green-600/10',
      badge: 'bg-green-600',
    },
  }

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.red

  return (
    <Link
      href={`/blog/${post.handle}`}
      className={`group relative flex flex-col overflow-hidden bg-white  shadow-md transition-all duration-500 hover:shadow-xl  md:flex-row`}
    >
      {/* Image - Takes 40% width on desktop */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-100 md:h-auto md:w-2/6">
        {post.featuredImage && (
          <Image
            src={post.featuredImage.src}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 "
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge */}
        {/* {post.category && (
          <div className="absolute top-4 left-4">
            <span
              style={Font.style}
              className={`inline-flex items-center gap-1.5 ${colors.badge} px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg`}
            >
              <span className="h-1 w-1 rounded-full bg-white" />
              {post.category.title}
            </span>
          </div>
        )} */}
      </div>

      {/* Content - Takes 60% width on desktop */}
      <div className="flex flex-1 flex-col justify-between p-6 md:w-3/5">
        <div>
          {/* Title */}
          <h3
            style={myFont.style}
            className={`mb-3 line-clamp-2 text-2xl font-black uppercase leading-tight text-neutral-900 transition-colors duration-300`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {post.excerpt || "Discover the latest insights and updates from the gaming industry."}
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between border-t-2 border-neutral-100 pt-4">
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            {post.date && (
              <time className="font-semibold">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            )}
            {post.timeToRead && (
              <>
                <span className="text-neutral-300">•</span>
                <span className="font-medium">{post.timeToRead}</span>
              </>
            )}
          </div>

          {/* Read more arrow */}
          <div className={`flex items-center gap-2 text-sm font-black uppercase  transition-transform duration-300 group-hover:translate-x-2`}>
            <span style={Font.style}>Read</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Border animation */}
      <div className={`absolute inset-0 border-2 border-transparent transition-colors duration-300 `} />
    </Link>
  )
}

export default HorizontalPostCard
