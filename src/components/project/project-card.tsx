import dayjs from 'dayjs';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Project } from '@contentlayer/generated';
import { PostCard } from '@semantic/components/ui/post-card';
import { ROUTES } from '@semantic/constants';

type ProjectCardProps = ComponentProps<'li'> & {
  project: Project;
  hideAward?: boolean;
};

export const ProjectCard = ({
  project,
  className,
  hideAward = false,
  ...props
}: ProjectCardProps) => {
  const { title, description, coverImage, coverImageBlur, tags, slug } = project;

  return (
    <li className={twMerge('flex flex-col w-full', className)} {...props}>
      <PostCard
        href={`${ROUTES.PROJECTS}/${slug}`}
        ariaLabel={`Read project: ${title}`}
        titleTag="h3"
        title={title}
        subtitle={description}
        coverImage={coverImage}
        coverImageBlur={coverImageBlur.blur}
        imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        surfaceInset="bleed"
        hasAward={!hideAward && Boolean(project.awards)}
        awardLabel={!hideAward ? project.awards : undefined}
        thumbnailInnerRadiusOffset="0.1875rem"
        topContent={
          <div className="mt-[1rem] flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="hoverable-surface rounded-full border border-[var(--color-border)] px-2 py-1 text-xs font-medium text-[var(--color-gray-mid)] transition-colors duration-250 ease-in-out"
              >
                {tag}
              </span>
            ))}
          </div>
        }
        meta={
          <>
            {dayjs(project.createdAt).format('YYYY. MM')} -{' '}
            {project.projectDue ? dayjs(project.projectDue).format('YYYY. MM') : 'YYYY. MM'}
          </>
        }
      />
    </li>
  );
};
