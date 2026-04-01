import Image from 'next/image';
import { cn } from '@/lib/utils';
import { profileInfo } from '@/config/Links';
import CTA from '../landing/CTA';
import { heroConfig } from '@/config/Hero';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ProfileHeaderProps {
  className?: string;
}

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};


export function ProfileHeader({ className }: ProfileHeaderProps) {
  const { name, handle, tagline, avatar, location } = profileInfo;
  const { buttons } = heroConfig

  return (
    <header
      className={cn(
        'flex flex-col items-center text-center gap-4',
        className,
      )}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-full border border-accent-foreground/70" />
        <div className="relative rounded-full border border-dashed border-accent-foreground/60 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          <Image
            src={avatar}
            alt={name}
            width={96}
            height={96}
            className="size-24 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-4xl font-bold tracking-tight">
          {name}
        </h1>
        <p className="mt-1 mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base md:text-lg text-neutral-500 whitespace-pre-wrap">{tagline}</p>
        <CTA />
      </div>
    </header>
  );
}

