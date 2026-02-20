export const MENU = [
  { title: '🏠 Home', link: '/' },
  { title: '🎲 About', link: '/about' },
  { title: '📟 Posts', link: '/posts' },
  { title: '🖥️ Projects', link: '/projects' },
] as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  POSTS: '/posts',
  CATEGORIES: '/categories',
  TAGS: '/tags',
} as const;
