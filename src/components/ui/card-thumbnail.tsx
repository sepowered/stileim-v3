import Image from 'next/image';
import { CSSProperties } from 'react';

type CardThumbnailProps = {
  title: string;
  coverImage: string;
  coverImageBlur?: string;
  imageSizes?: string;
  hasAward?: boolean;
  awardLabel?: string;
  innerRadiusOffset?: string;
};

export const CardThumbnail = ({
  title,
  coverImage,
  coverImageBlur,
  imageSizes = '100vw',
  hasAward = false,
  awardLabel,
  innerRadiusOffset = '0.1875rem',
}: CardThumbnailProps) => {
  const radiusVars = {
    '--thumbnail-radius': '0.875rem',
    '--thumbnail-inner-radius-offset': innerRadiusOffset,
    '--thumbnail-inner-radius':
      'calc(var(--thumbnail-radius) - var(--thumbnail-inner-radius-offset))',
  } as CSSProperties;

  return (
    <div
      className="relative w-full aspect-[1.8/1] rounded-[var(--thumbnail-radius)] border border-[var(--color-border)] overflow-hidden"
      style={radiusVars}
    >
      {hasAward && (
        <span className="absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-[var(--thumbnail-inner-radius)] border border-[var(--color-border)] bg-[var(--color-toggle)] px-3 py-2 text-xs leading-none text-[var(--color-gray-accent)] backdrop-blur">
          <span aria-hidden>🏆</span>
          {awardLabel && <span className="truncate">{awardLabel}</span>}
        </span>
      )}
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
  );
};
