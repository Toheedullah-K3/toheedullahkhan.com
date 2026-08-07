import Appwrite from '@/components/technologies/Appwrite';
import Bluehost from '@/components/technologies/Bluehost';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Github from '@/components/technologies/Github';
import Hostinger from '@/components/technologies/Hostinger';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Php from '@/components/technologies/Php';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import WordPress from '@/components/technologies/WordPress';
import GoogleAnalytics from '@/components/technologies/GoogleAnalytics';
import GoogleSearchConsole from '@/components/technologies/GoogleSearchConsole';
import PageSpeedInsights from '@/components/technologies/PageSpeedInsights';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'DevTrack',
    description:
      'A comprehensive project management and time tracking tool designed to help developers and teams efficiently manage tasks, track time, and visualize project progress with an intuitive dashboard and real-time collaboration features.',
    image: '/project/devtrack.png',
    video: '',
    link: 'https://github.com/ToheedUllah-K3/DevTrack',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/ToheedUllah-K3/DevTrack',
    live: 'https://github.com/ToheedUllah-K3/DevTrack',
    details: true,
    projectDetailsPageSlug: '/projects/devtrack',
    isWorking: true,
  },
  {
    title: 'SentiScope',
    description:
      'Advanced sentiment analysis platform to analyze, compare, and visualize sentiment trends across multiple topics, platforms, and AI models in real time.',
    image: '/project/sentiscope.png',
    link: 'https://sentiscope.toheedullahkhan.com',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/Toheedullah-K3/sentiscope',
    live: 'https://sentiscope.toheedullahkhan.com',
    details: true,
    projectDetailsPageSlug: '/projects/sentiscope',
    isWorking: true,
  },
  {
    title: 'DashCraft',
    description:
      'A modern, responsive admin dashboard featuring clean UI, reusable components, interactive charts, and performance-optimized layouts for real-world applications.',
    image: '/project/ui-dashboard.png',
    link: 'https://dashcraft.toheedullahkhan.com',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/Toheedullah-K3/shadcn-ui-dashboard',
    live: 'https://dashcraft.toheedullahkhan.com',
    details: true,
    projectDetailsPageSlug: '/projects/dashcraft',
    isWorking: true,
  },
  {
    title: 'IMCC GC',
    description:
      'A complete commercial & civil construction company website featuring custom design, WordPress CMS integration, service showcases, project portfolios, and high-performance hosting deployment on Hostinger.',
    image: '/project/imcc-gc.png',
    link: 'https://imccgc.com',
    technologies: [
      { name: 'WordPress', icon: <WordPress key="wordpress" /> },
      { name: 'Hostinger', icon: <Hostinger key="hostinger" /> },
      { name: 'PHP', icon: <Php key="php" /> },
      { name: 'Figma', icon: <Figma key="figma" /> },
      { name: 'HTML5', icon: <Html key="html" /> },
      { name: 'CSS3', icon: <CSS key="css" /> },
    ],
    github: 'https://imccgc.com',
    live: 'https://imccgc.com',
    details: true,
    projectDetailsPageSlug: '/projects/imcc-gc',
    isWorking: true,
  },
  {
    title: 'Ian Darrah',
    description:
      'A personal branding and yoga training website built for Ian Darrah (Miami & Peru based yoga master), featuring workshop schedules, retreat bookings, client testimonials, and reliable hosting on Bluehost.',
    image: '/project/ian-darrah.png',
    link: 'https://iandarrah.com/',
    technologies: [
      { name: 'WordPress', icon: <WordPress key="wordpress" /> },
      { name: 'Bluehost', icon: <Bluehost key="bluehost" /> },
      { name: 'PHP', icon: <Php key="php" /> },
      { name: 'HTML5', icon: <Html key="html" /> },
      { name: 'CSS3', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://iandarrah.com/',
    live: 'https://iandarrah.com/',
    details: true,
    projectDetailsPageSlug: '/projects/ian-darrah',
    isWorking: true,
  },
  {
    title: 'AZ Social Networking Hub',
    description:
      'A feature-rich social network marketplace built with PHP Laravel and PostgreSQL, empowering users to connect, trade services & products, manage interactive profiles, and process transactions.',
    image: '/project/az-pvt-ltd.png',
    link: 'https://azpvtltd.org',
    technologies: [
      { name: 'PHP', icon: <Php key="php" /> },
      { name: 'Laravel', icon: <Laravel key="laravel" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML5', icon: <Html key="html" /> },
      { name: 'CSS3', icon: <CSS key="css" /> },
      { name: 'Bootstrap', icon: <BootStrap key="bootstrap" /> },
    ],
    github: 'https://azpvtltd.org',
    live: 'https://azpvtltd.org',
    details: true,
    projectDetailsPageSlug: '/projects/az-social-hub',
    isWorking: true,
  },
  {
    title: 'SkyCars.pk',
    description:
      'An automotive portal and car rental platform built on WordPress, featuring technical & on-page SEO optimization, Google Search Console indexing, PageSpeed performance tuning, and managed deployment on Hostinger.',
    image: '/project/skycars.png',
    link: 'https://skycars.pk/',
    technologies: [
      { name: 'WordPress', icon: <WordPress key="wordpress" /> },
      { name: 'Hostinger', icon: <Hostinger key="hostinger" /> },
      { name: 'Google Search Console', icon: <GoogleSearchConsole key="gsc" /> },
      { name: 'Google PageSpeed Insights', icon: <PageSpeedInsights key="pagespeed" /> },
      { name: 'Google Analytics', icon: <GoogleAnalytics key="analytics" /> },
      { name: 'PHP', icon: <Php key="php" /> },
      { name: 'HTML5', icon: <Html key="html" /> },
      { name: 'CSS3', icon: <CSS key="css" /> },
    ],
    github: 'https://skycars.pk/',
    live: 'https://skycars.pk/',
    details: true,
    projectDetailsPageSlug: '/projects/skycars',
    isWorking: true,
  },
];
