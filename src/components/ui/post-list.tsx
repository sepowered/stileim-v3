import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Post } from '@contentlayer/generated';

import { PostCard } from './post-card';
import { RelativeTime } from './relative-time';

type PostListProps = ComponentProps<'ul'> & {
  className?: string;
  posts: Post[];
};

export const PostList = ({ posts, className, ...props }: PostListProps) => {
  return (
    <ul
      className={twMerge('grid grid-cols-1 w-full gap-[4.0625rem] tablet:grid-cols-2', className)}
      {...props}
      data-animate
    >
      {posts.map((post) => (
        <li key={post._id}>
          <PostCard
            href={`/posts/${post.slug}`}
            ariaLabel={`Read post: ${post.title}`}
            title={post.title}
            coverImage={post.coverImage}
            coverImageBlur={post.coverImageBlur.blur}
            meta={<RelativeTime time={post.createdAt} />}
          />
        </li>
      ))}
    </ul>
  );
};
