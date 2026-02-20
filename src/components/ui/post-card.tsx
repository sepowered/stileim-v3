import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

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
  className,
  ...props
}: PostCardProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'flex flex-col w-full cursor-pointer',
        'hover:[&_.title]:bg-[var(--color-gray-hover)]',
        'hover:[&_.description]:bg-[var(--color-gray-hover)]',
        'active:[&_.title]:bg-[var(--color-border)]',
        'active:[&_.description]:bg-[var(--color-border)]',
        className,
      )}
      aria-label={ariaLabel ?? title}
      {...props}
    >
      <div className="relative w-full aspect-[1.8/1] rounded-[0.875rem] border border-[var(--color-border)] overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center"
          src={coverImage}
          alt={`${title} Cover Image`}
          {...(coverImageBlur ? { placeholder: 'blur' as const, blurDataURL: coverImageBlur } : {})}
          draggable={false}
          priority={false}
          quality={100}
          sizes={imageSizes}
          fill
        />
      </div>

      {topContent}

      <TitleTag className="title post-subtitle flex overflow-hidden text-ellipsis line-clamp-2 px-[0.625rem] py-[0.125rem] mt-[1rem] mx-[-0.625rem] mb-[-0.125rem] rounded-[0.5rem] transition-colors duration-250 ease-in-out">
        {title}
      </TitleTag>

      {subtitle && (
        <p className="subtitle post-description px-[0.625rem] py-[0.125rem] mt-[0.75rem] mx-[-0.625rem] mb-[-0.125rem] rounded-[0.5rem] transition-colors duration-250 ease-in-out line-clamp-2 text-[var(--color-gray-mid)]">
          {subtitle}
        </p>
      )}

      {extraContent}

      <div className="description h4 text-[var(--color-gray-light)] w-fit px-[0.625rem] py-[0.125rem] mt-[1rem] mx-[-0.625rem] mb-[-0.125rem] rounded-[0.5rem] transition-colors duration-250 ease-in-out">
        {meta}
      </div>
    </Link>
  );
};
