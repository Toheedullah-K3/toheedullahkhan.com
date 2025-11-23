import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'GN Group of Companies',
    position: 'Lead Web Developer',
    location: 'Islamabad, Pakistan (On-site)',
    image: '/company/gntech.png',
    description: [
      'Leading frontend & backend development for multiple enterprise-level projects, ensuring scalable architecture, optimized performance, and rapid delivery.',
      'Architected and optimized major systems using MERN + Next.js, improving application load times by up to 45% through code splitting, caching, and API refactoring.',
      'Mentored junior developers, conducted code reviews, enforced best practices, and helped the team adopt modern workflows including Git branching and CI/CD.',
      'Designed and deployed full-stack solutions with PostgreSQL, MongoDB, and Prisma, ensuring efficient data modeling and minimal query latency.',
      'Collaborated directly with cross-functional teams and clients to translate requirements into clean, maintainable, and high-performance web applications.',
    ],
    startDate: 'Dec 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Prisma',
        href: 'https://www.prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
    ],
    website: 'https://thegntechnologies.com/',
  },
  {
    isCurrent: false,
    company: 'AZ Pvt Ltd',
    position: 'MERN Stack Developer',
    location: 'Islamabad, Pakistan (On-site)',
    image: '/company/azpvtltd.png',
    description: [
      'Developed full-stack features for AZ Marketplace, a multi-vendor e-commerce platform built with the MERN stack.',
      'Created secure REST APIs for products, authentication, vendors, and order management with role-based access.',
      'Optimized MongoDB queries and implemented indexing to significantly reduce server response time.',
      'Improved frontend UX with reusable UI components, responsive layouts, and optimized state management.',
      'Collaborated in Agile sprints, participated in standups, and assisted junior teammates with debugging and code structure.',
    ],
    startDate: 'June 2024',
    endDate: 'Nov 2024',
    technologies: [
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Prisma',
        href: 'https://prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://expelee.com',
  },
  {
    isCurrent: false,
    company: 'Sky Cars',
    position: 'Website Manager & SEO Specialist (Remote)',
    location: 'UAE (Remote)',
    image: '/company/skycars.png',
    description: [
      'Managed and optimized the entire WordPress website, focusing on SEO, performance improvements, and UX enhancements.',
      'Improved search ranking and organic traffic through on-page SEO, content strategy, and technical fixes.',
      'Developed custom WordPress pages, integrated plugins, and optimized site structure for mobile responsiveness.',
      'Implemented analytics tracking and generated performance reports for continuous optimization.',
    ],
    startDate: 'Feb 2024',
    endDate: 'Feb 2025',
    website: 'https://skycars.pk/',
    x: 'https://x.com/Flameloop149578',
    linkedin: 'https://www.linkedin.com/company/flameloop',
    technologies: [
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'BootStrap',
        href: 'https://getbootstrap.com/',
        icon: <BootStrap />,
      },
    ],
  },
];
