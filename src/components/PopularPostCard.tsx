import Image from "next/image";
import Link from "next/link";

const PopularPostCard = ({ post, rank }: { post: any; rank: number }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="group flex gap-4 overflow-hidden border-b border-neutral-100 pb-4 transition-all duration-300 last:border-0 hover:bg-neutral-50"
    >
      {/* Rank Number */}
      <div className="flex-shrink-0">
        <div className="special-font special-font flex h-full w-12 items-center justify-center font-zentry text-5xl font-black text-black transition-all duration-300">
          {rank}
        </div>
      </div>

      {/* Thumbnail */}
      <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden bg-neutral-100">
        {post.featuredImage && (
          <Image
            src={post.featuredImage.src}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        {/* Category */}
        {post.category && (
          <span className="mb-1.5 inline-block font-samuel text-[10px] font-bold tracking-wider text-red-600 uppercase">
            {post.category.title}
          </span>
        )}

        {/* Title */}
        <h4 className="mb-1.5 line-clamp-2 font-zentry text-sm leading-tight font-bold text-neutral-900 transition-colors duration-300 group-hover:text-red-600">
          {post.title}
        </h4>

        {/* Date */}
        {post.date && (
          <time className="text-xs text-neutral-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        )}
      </div>
    </Link>
  )
}
export default PopularPostCard;