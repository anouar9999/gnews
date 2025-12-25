import Image from "next/image";
import Link from "next/link";

const TrendingCard = ({ post, rank }: { post: any; rank: number }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="relative block overflow-hidden bg-white shadow-lg transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-neutral-100">
        {post.featuredImage && (
          <Image
            src={post.featuredImage.src}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category Badge - Bottom Right */}
        {post.category && (
          <div className="absolute right-4 bottom-4 z-10">
            <span className="inline-flex items-center gap-2 bg-white/95 px-4 py-2 font-samuel text-xs font-black tracking-wider text-red-600 uppercase shadow-lg backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
              {post.category.title}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-3 line-clamp-2 font-zentry text-lg leading-tight  text-neutral-900 transition-colors group-hover:text-red-600 md:text-2xl">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {post.excerpt || "Discover the latest insights and updates from the gaming industry. Don't miss out on what's trending right now."}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3 text-xs text-neutral-500">
          {post.author && <span className="font-bold text-neutral-900">{post.author.name}</span>}

          {post.date && (
            <>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </>
          )}

          {post.timeToRead && (
            <>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {post.timeToRead}
              </span>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="font-bold text-red-600 group-hover:underline">Read Full Story</span>
          <svg
            className="h-5 w-5 text-red-600 transition-transform group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors group-hover:border-red-600" />
    </Link>
  )
}
export default TrendingCard;