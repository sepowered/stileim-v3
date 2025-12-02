'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const SchoolAchievements = () => {
  const [isOpen, setIsOpen] = useState(false);

  const achievements = [
    { description: '디자인기초 연합PT', period: '2024학년도 1학기' },
    { description: '영상기초 연합PT', period: '2024학년도 1학기' },
    { description: '콘텐츠디자인 연합PT', period: '2024학년도 2학기' },
    { description: '캡스톤디자인 PT우수작', period: '2025학년도 2학기' },
  ];

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-[var(--color-gray-mid)] hover:text-[var(--color-gray-bold)] transition-colors w-fit"
      >
        <span>교내 업적 {isOpen ? '접기' : '더보기'}</span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-1 pl-0 list-none overflow-hidden"
          >
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm text-[var(--color-gray-mid)]"
              >
                <span>{item.description}</span>
                <span className="font-mono">{item.period}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
