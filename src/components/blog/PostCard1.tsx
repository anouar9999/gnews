import { TBlogPost } from '@/data/data'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import PostCardMeta from './PostCardMeta'

interface Props {
  className?: string
  post: TBlogPost
  size?: 'sm' | 'md'
}

const PostCard1: FC<Props> = ({ className = 'h-full', post, size = 'md' }) => {
  const { handle, title, timeToRead, excerpt: description, date, featuredImage: image, author } = post

  return (
    <div
      className={clsx(
        className,
        'flex flex-col',

        size === 'md' && 'gap-y-8',
        size === 'sm' && 'gap-y-4'
      )}
    >
      <Link href={'/blog/' + handle} title={title} className="relative block aspect-3/2 overflow-hidden">
        {image?.src && (
          <Image src={image} alt={title || ''} fill sizes="(max-width: 768px) 50vw, 30vw" className="object-cover" />
        )}
      </Link>

      <div className="mt-auto flex flex-col">
        {post.category && (
          <div className="mb-2 text-xs font-bold tracking-wider text-red-600 uppercase">{post.category.title}</div>
        )}
        <h2
          className={clsx(
            'block font-semibold text-neutral-900 dark:text-neutral-100',
            size === 'sm' && 'text-base sm:text-xl',
            size === 'md' && 'text-lg sm:text-2xl'
          )}
        >
          <Link
            href={'/blog/' + handle}
            className="mb-2 line-clamp-1 text-lg leading-tight font-bold text-neutral-900 transition-colors group-hover:text-red-600 md:text-xl"
          >
            {title}
          </Link>
        </h2>
        <p className="mt line-clamp-2 text-neutral-500 dark:text-neutral-400">{description}</p>
        <PostCardMeta author={author} date={date || ''} className="mt-5" />
      </div>
    </div>
  )
}

export default PostCard1
