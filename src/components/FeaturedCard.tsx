import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="group relative block h-[450px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-500 hover:border-red-600/50 hover:shadow-red-600/20 lg:h-[500px]"
    >
      {/* Background Image */}
      {post.featuredImage && (
        <Image
          src={post.featuredImage.src}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

      {/* Red accent line */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
        {/* Category Badge */}
        {post.category && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 border border-red-600 bg-red-600/90 px-4 py-2 font-samuel text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-all duration-300 group-hover:bg-red-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              {post.category.title}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="mb-4 font-zentry text-3xl leading-tight font-black text-white transition-colors duration-300 group-hover:text-red-100 md:text-4xl lg:text-5xl xl:text-6xl">
          {post.title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-white/70">
          {post.author && <span className="font-bold text-white">{post.author.name}</span>}
          {post.date && <span>•</span>}
          {post.date && (
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          )}
          {post.timeToRead && <span>•</span>}
          {post.timeToRead && <span>{post.timeToRead}</span>}
        </div>
      </div>

      {/* Corner accent */}
      <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  )
}
export default FeaturedCard;