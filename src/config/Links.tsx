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
  Sparkles,
} from 'lucide-react';

export type LinkItem = {
  id: string;
  title: string;
  href: string;
  description?: string;
  icon: ReactElement;
  featured?: boolean;
  featuredWord?: string;
  featuredColor?: string;
};

export type SocialLinkItem = {
  id: string;
  label: string;
  href: string;
  icon: ReactElement;
};

export const profileInfo = {
  name: 'Toheed Ullah Khan',
  handle: '@toheedullahkhan',
  tagline: 'Full-stack developer who lead, build, and ship.',
  avatar: '/assets/dp.png',
  location: 'Pakistan',
};

export const primaryLinks: LinkItem[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    href: 'https://www.toheedullahkhan.com/',
    description: 'Case studies, projects, and everything I am working on.',
    icon: <Globe className="size-4" />,
    featured: true,
    featuredWord: 'Apex',
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/Toheedullah-K3',
    description: 'Open-source work, experiments, and contributions.',
    icon: <Github className="size-4" />,
  },
  {
    id: 'resume',
    title: 'Download Résumé',
    href: '/resume.pdf',
    description: 'One-page overview of my experience and skills.',
    icon: <FileText className="size-4" />,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/toheed-ullah-khanx/',
    description: 'Professional profile, career highlights, and networking.',
    icon: <Linkedin className="size-4" />,
  },
  {
    id: 'code-playground',
    title: 'Code & Experiments',
    href: 'https://github.com/Toheedullah-K3?tab=repositories',
    description: 'Small experiments and prototypes I am playing with.',
    icon: <Code2 className="size-4" />,
  },
];

export const secondaryLinks: LinkItem[] = [
  {
    id: 'the-vault',
    title: 'The Vault',
    href: '/vault',
    description: 'A curated collection of hidden gems, experiments, and creative ideas.',
    icon: <Sparkles className="size-4" />,
  },
];

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:toheedullah002@gmail.com',
    icon: <Mail className="size-4" />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/toheed-ullah-khanx/',
    icon: <Linkedin className="size-4" />,
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    href: 'https://x.com/t_o_h_e_e_d__',
    icon: <Twitter className="size-4" />,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Toheedullah-K3',
    icon: <Github className="size-4" />,
  },
];

