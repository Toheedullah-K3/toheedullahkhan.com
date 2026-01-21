import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
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
import { Project } from '@/types/project';


export const projects: Project[] = [
  {
    title: 'NotesBuddy',
    description:
      'A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools',
    image: '/project/devtrack.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
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
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'SentiScope',
    description:
      'Advanced sentiment analysis platform to analyze, compare, and visualize sentiment trends across multiple topics, platforms, and AI models in real time.',
    image: '/project/sentiscope.png',
    video: 'https://ik.imagekit.io/yourpath/sentiscope.mp4',
    link: 'https://sentiscope.yourdomain.com',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      // { name: 'Vite', icon: <Vite key="vite" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/yourusername/sentiscope',
    live: 'https://sentiscope.yourdomain.com',
    details: true,
    projectDetailsPageSlug: '/projects/sentiscope',
    isWorking: true,
  },
  {
    title: 'DashCraft',
    description:
      'A modern, responsive admin dashboard featuring clean UI, reusable components, interactive charts, and performance-optimized layouts for real-world applications.',
    image: '/project/ui-dashboard.png',
    video: 'https://your-video-link.mp4', // optional
    link: 'https://your-live-link.com',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/Toheedullah-K3/dashcraft-dashboard',
    live: 'https://dashcraft.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/dashcraft',
    isWorking: true,
  },
];
