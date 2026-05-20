import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Phone from '@/components/svgs/devices/Phone';
import { Cpu, MemoryStick } from 'lucide-react';

export const devices = [
  {
    name: "iPhone 12 Pro Max",
    icon: <Phone className="size-4" />,
  },
  {
    name: "Laptop - AMD Ryzen 7 PRO 3700U w/ Radeon Vega Mobile Gfx 2.30 GHz",
    icon: <Laptop className="size-4" />,
  },
  {
    name: "Laptop RAM - 16 GB",
    icon: <MemoryStick className="size-4" />,
  },
  {
    name: "PC - Intel i5 12th Gen",
    icon: <Monitor className="size-4" />,
  },
  {
    name: "GPU - NVIDIA GTX 1660",
    icon: <Cpu className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Dia', href: 'https://www.diabrowser.com/' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'TickTick', href: 'https://ticktick.com/download' },
  { name: 'OBS Studio', href: 'https://obsproject.com/' },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
  { name: 'Ghostty', href: 'https://ghostty.org/' },
];
