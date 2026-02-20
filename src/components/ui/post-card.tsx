import Link from 'next/link';
import { ComponentProps, ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { CardThumbnail } from './card-thumbnail';

type PostCardProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: string;
  title: string;
  coverImage: string;
  coverImageBlur?: string;
  ariaLabel?: string;
  titleTag?: ElementType;
  subtitle?: ReactNode;
  meta: ReactNode;
  topContent?: ReactNode;
  extraContent?: ReactNode;
  imageSizes?: string;
  surfaceInset?: 'bleed' | 'soft-bleed' | 'aligned';
  hasAward?: boolean;
  awardLabel?: string;
  thumbnailInnerRadiusOffset?: string;
};

export const PostCard = ({
  href,
  title,
  coverImage,
  coverImageBlur,
  ariaLabel,
  titleTag: TitleTag = 'h2',
  subtitle,
  meta,
  topContent,
  extraContent,
  imageSizes = '100vw',
  surfaceInset = 'bleed',
  hasAward = false,
  awardLabel,
  thumbnailInnerRadiusOffset,
  className,
  ...props
}: PostCardProps) => {
  const titleSurfaceSpacing =
    surfaceInset === 'bleed'
      ? 'px-[0.625rem] mx-[-0.625rem] mb-[-0.125rem]'
      : surfaceInset === 'soft-bleed'
        ? 'px-[0.625rem] mx-[-0.25rem] mb-[-0.125rem]'
        : 'px-0 mx-0 mb-0';
  const bodySurfaceSpacing =
    surfaceInset === 'bleed'
      ? 'px-[0.625rem] mx-[-0.625rem] mb-[-0.125rem]'
      : surfaceInset === 'soft-bleed'
        ? 'px-[0.625rem] mx-[-0.25rem] mb-[-0.125rem]'
        : 'px-0 mx-0 mb-0';

  return (
    <Link
      href={href}
      className={twMerge(
        'flex flex-col w-full cursor-pointer',
        'hover:[&_.hoverable-surface]:bg-[var(--color-gray-hover)]',
        'active:[&_.hoverable-surface]:bg-[var(--color-border)]',
        className,
      )}
      aria-label={ariaLabel ?? title}
      {...props}
    >
      <CardThumbnail
        title={title}
        coverImage={coverImage}
        coverImageBlur={coverImageBlur}
        imageSizes={imageSizes}
        hasAward={hasAward}
        awardLabel={awardLabel}
        innerRadiusOffset={thumbnailInnerRadiusOffset}
      />

      {topContent}

      <TitleTag
        className={twMerge(
          'title hoverable-surface post-subtitle flex overflow-hidden text-ellipsis line-clamp-2 py-[0.125rem] mt-[1rem] rounded-[0.5rem] transition-colors duration-250 ease-in-out',
          titleSurfaceSpacing,
        )}
      >
        {title}
      </TitleTag>

      {subtitle && (
        <p
          className={twMerge(
            'subtitle hoverable-surface post-description py-[0.125rem] mt-[0.75rem] rounded-[0.5rem] transition-colors duration-250 ease-in-out line-clamp-2 text-[var(--color-gray-mid)]',
            bodySurfaceSpacing,
          )}
        >
          {subtitle}
        </p>
      )}

      {extraContent}

      <div
        className={twMerge(
          'description hoverable-surface h4 text-[var(--color-gray-light)] w-fit py-[0.125rem] mt-[1rem] rounded-[0.5rem] transition-colors duration-250 ease-in-out',
          bodySurfaceSpacing,
        )}
      >
        {meta}
      </div>
    </Link>
  );
};
