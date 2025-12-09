import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Project } from '@contentlayer/generated';

import { ProjectCard } from './project-card';

type ProjectListProps = ComponentProps<'ul'> & {
  projects: Project[];
  hideAward?: boolean;
};

export const ProjectList = ({
  projects,
  className,
  hideAward = false,
  ...props
}: ProjectListProps) => {
  return (
    <ul
      className={twMerge(
        'grid grid-cols-1 gap-8 tablet:grid-cols-2 desktop:grid-cols-3',
        className,
      )}
      {...props}
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} hideAward={hideAward} />
      ))}
    </ul>
  );
};
