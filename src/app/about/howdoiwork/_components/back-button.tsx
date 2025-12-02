'use client';

import { useRouter } from 'next/navigation';

import { ChevronLeftIcon } from '@semantic/components/icon';

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      className="flex items-center h-fit w-fit py-[0.3125rem] pr-[0.5625rem] text-[var(--color-gray-accent)] cursor-pointer select-none gap-[0.5rem] opacity-100 transition-opacity duration-150 ease-in-out hover:opacity-70"
    >
      <ChevronLeftIcon size={18} />
      <span className="text-lg font-medium">Back</span>
    </button>
  );
};
