import Image from "next/image"
import Link from "next/link"

const LatestPostCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="group relative overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-neutral-100">
        {post.featuredImage && (
          <Image
            src={post.featuredImage.src}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge */}
        {post.category && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 bg-red-600 px-2.5 py-1 font-samuel text-[10px] font-bold tracking-wider text-white uppercase">
              {post.category.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="mb-2 line-clamp-2 font-zentry text-base leading-tight font-black text-neutral-900 transition-colors duration-300 group-hover:text-red-600 md:text-lg">
          {post.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          {post.author && <span className="font-medium text-neutral-700">{post.author.name}</span>}
          {post.date && post.author && <span>•</span>}
          {post.date && (
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}
        </div>
      </div>
    </Link>
  )
}
export default LatestPostCard;