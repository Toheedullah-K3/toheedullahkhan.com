import type { ReactElement } from 'react';
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  Twitter,
  FileText,
  Code2,
  NotebookPen,
} from 'lucide-react';

export type LinkItem = {
  id: string;
  title: string;
  href: string;
  description?: string;
  icon: ReactElement;
  featured?: boolean;
};

export type SocialLinkItem = {
  id: string;
  label: string;
  href: string;
  icon: ReactElement;
};

export const profileInfo = {
  name: 'Toheedullah Khan',
  handle: '@toheedullahkhan',
  tagline: 'Building thoughtful web experiences & performant frontends.',
  avatar: '/assets/dp.png',
  location: 'Pakistan',
};

export const primaryLinks: LinkItem[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    href: '/',
    description: 'Case studies, projects, and everything I am working on.',
    icon: <Globe className="size-4" />,
    featured: true,
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/toheedullahkhan',
    description: 'Open-source work, experiments, and contributions.',
    icon: <Github className="size-4" />,
    featured: true,
  },
  {
    id: 'resume',
    title: 'Download Résumé',
    href: '/resume.pdf',
    description: 'One-page overview of my experience and skills.',
    icon: <FileText className="size-4" />,
  },
  {
    id: 'blogs',
    title: 'Technical Writing',
    href: '/blog',
    description: 'Deep dives into frontend, performance, and DX.',
    icon: <NotebookPen className="size-4" />,
  },
  {
    id: 'code-playground',
    title: 'Code & Experiments',
    href: 'https://github.com/toheedullahkhan?tab=repositories',
    description: 'Small experiments and prototypes I am playing with.',
    icon: <Code2 className="size-4" />,
  },
];

export const secondaryLinks: LinkItem[] = [
  {
    id: 'work-experience',
    title: 'Work Experience',
    href: '/work-experience',
    description: 'Roles, responsibilities, and what I shipped.',
    icon: <Globe className="size-4" />,
  },
];

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hello@toheedullahkhan.com',
    icon: <Mail className="size-4" />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/toheedullahkhan',
    icon: <Linkedin className="size-4" />,
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    href: 'https://x.com/toheedullahk',
    icon: <Twitter className="size-4" />,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/toheedullahkhan',
    icon: <Github className="size-4" />,
  },
];

