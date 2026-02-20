import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Post } from '@contentlayer/generated';

import { PostCard } from './post-card';
import { RelativeTime } from './relative-time';

type PostGridProps = ComponentProps<'div'> & {
  className?: string;
  posts: Post[];
};

export const PostGrid = ({ posts, className, ...props }: PostGridProps) => {
  return (
    <div
      className={twMerge('grid grid-cols-1 w-full gap-[4.0625rem] tablet:grid-cols-2', className)}
      {...props}
    >
      {posts.map((post) => (
        <PostCard
          key={post._id}
          href={`/posts/${post.slug}`}
          ariaLabel={`Read post: ${post.title}`}
          title={post.title}
          coverImage={post.coverImage}
          coverImageBlur={post.coverImageBlur.blur}
          meta={<RelativeTime time={post.createdAt} />}
        />
      ))}
    </div>
  );
};
