import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

import { ChevronRightIcon } from '@semantic/components/icon';

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  showLink?: boolean;
} & ComponentPropsWithoutRef<'section'>;

export const HeroSection = ({
  title,
  subtitle,
  description,
  showLink = false,
  className,
  ...props
}: HeroSectionProps) => {
  return (
    <section className={`column w-full ${className || ''}`} aria-label="Hero section" {...props}>
      <div className="relative w-full overflow-hidden">
        <div className="column py-12 max-[426px]:py-8 gap-6 max-[426px]:gap-6 items-start justify-center max-[426px]:min-h-[16rem]">
          {(title || subtitle) && (
            <div className="column gap-4 max-[426px]:gap-3">
              {title && (
                <h1
                  className="text-6xl tablet:text-7xl max-[768px]:text-4xl max-[426px]:text-4xl text-[var(--color-gray-accent)] leading-[1.1]"
                  style={{
                    fontFamily: 'var(--font-instrument-serif)',
                    fontWeight: 400,
                    letterSpacing: '-0.05em',
                  }}
                >
                  {title}
                </h1>
              )}
              {subtitle && (
                <h2 className="text-3xl tablet:text-4xl max-[768px]:text-lg max-[426px]:text-lg font-normal text-[var(--color-gray-accent)] leading-[1.4]">
                  {subtitle}
                </h2>
              )}
            </div>
          )}
          {description && (
            <p className="text-xl max-[426px]:text-sm text-[var(--color-gray-mid)] leading-relaxed max-w-3xl font-normal whitespace-pre-line">
              {description}
            </p>
          )}
          {showLink && (
            <Link
              href="/about/howdoiwork"
              className="flex items-center gap-1 text-[var(--color-gray-mid)] hover:text-[var(--color-gray-bold)] transition-colors duration-200 group"
            >
              <span className="text-lg max-[426px]:text-sm font-medium">
                경계없이,한계없이. 일하는 방법 알아보기
              </span>
              <ChevronRightIcon className="w-5 h-5 max-[426px]:w-4 max-[426px]:h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
