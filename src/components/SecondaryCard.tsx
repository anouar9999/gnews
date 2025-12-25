import Image from "next/image";
import Link from "next/link";

const SecondaryCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blog/${post.handle}`}
      className="group relative block h-[220px] overflow-hidden border border-white/10 bg-neutral-900 shadow-lg transition-all duration-500 hover:border-red-600/40 hover:shadow-xl hover:shadow-red-600/10 md:h-[240px]"
    >
      {/* Background Image */}
      {post.featuredImage && (
        <Image
          src={post.featuredImage.src}
          alt={post.title}
          fill
          className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Bottom accent line */}
      <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        {/* Category Badge */}
        {post.category && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 border border-red-600/50 bg-red-600/80 px-3 py-1.5 font-samuel text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-white" />
              {post.category.title}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 font-zentry text-lg leading-tight font-black text-white transition-colors group-hover:text-red-100 md:text-xl">
          {post.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-white/60">
          {post.date && (
            <time className="font-medium text-white/80">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
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
      </div>
    </Link>
  )
}
export default SecondaryCard;