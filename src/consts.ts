import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Oceanus Group',
  description: 'My website built with AstroJS and Tailwind CSS.',
  href: 'https://home.civdev.xyz',
  author: 'CM-IV',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/projects',
    label: 'projects',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/CM-IV',
    label: 'GitHub',
  },
  {
    href: 'mailto:chuck@civdev.xyz',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
