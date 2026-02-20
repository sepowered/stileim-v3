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
        className={twMerge(
          'hover:[&_.project-tag]:bg-[var(--color-gray-hover)]',
          'active:[&_.project-tag]:bg-[var(--color-border)]',
          'hover:[&_.project-award]:bg-[var(--color-gray-hover)]',
          'active:[&_.project-award]:bg-[var(--color-border)]',
        )}
        titleTag="h3"
        title={title}
        subtitle={description}
        coverImage={coverImage}
        coverImageBlur={coverImageBlur.blur}
        imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        topContent={
          <div className="mt-[1rem] flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="project-tag rounded-full border border-[var(--color-border)] px-2 py-1 text-xs font-medium text-[var(--color-gray-mid)] transition-colors duration-250 ease-in-out"
              >
                {tag}
              </span>
            ))}
          </div>
        }
        extraContent={
          !hideAward && project.awards ? (
            <div className="project-award mt-1 flex items-center gap-2 rounded-lg bg-[var(--color-background05)] px-3 py-1 transition-colors duration-250 ease-in-out">
              <span className="text-base">🏆</span>
              <span className="text-sm font-medium text-[var(--color-gray-bold)]">
                {project.awards}
              </span>
            </div>
          ) : undefined
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
