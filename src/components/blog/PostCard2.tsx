import { TBlogPost } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import PostCardMeta from './PostCardMeta'

interface Props {
  className?: string
  post: TBlogPost
}

const PostCard2: FC<Props> = ({ className, post }) => {
  const { handle, title, timeToRead, excerpt: description, date, featuredImage: image, author } = post

  return (
    <div className={`relative flex justify-between gap-x-8 ${className}`}>
        <Link href={'/blog/' + handle} className="relative block h-full w-2/6 shrink-0 sm:w-1/4">
        {image?.src && (
          <Image alt={title} src={image} className=" object-cover " sizes="200px" fill />
        )}
      </Link>
      <div className="flex h-full flex-col py-2">
        <h2 className={`block text-base font-semibold nc-card-title`}>
          <Link href={'/blog-single'} className="line-clamp-2 capitalize" title={'title'}>
            {title}
          </Link>
        </h2>
        <span className="my-3 hidden text-neutral-500 sm:block dark:text-neutral-400">
          <span className="line-clamp-2">{description}</span>
        </span>
        <span className="mt-4 block text-sm text-neutral-500 sm:hidden">
          {date} · {timeToRead}
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta author={author} date={date || ''} />
        </div>
      </div>

    
    </div>
  )
}

export default PostCard2
