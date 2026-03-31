import Image from 'next/image';
import { cn } from '@/lib/utils';
import { profileInfo } from '@/config/Links';

interface ProfileHeaderProps {
  className?: string;
}

export function ProfileHeader({ className }: ProfileHeaderProps) {
  const { name, handle, tagline, avatar, location } = profileInfo;

  return (
    <header
      className={cn(
        'flex flex-col items-center text-center gap-4',
        className,
      )}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500/60 via-sky-500/60 to-emerald-400/60 blur-xl opacity-60" />
        <div className="relative rounded-full border border-white/5 bg-neutral-900/60 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
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
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {name}
        </h1>
        <p className="text-sm text-muted-foreground">{tagline}</p>
        <div className="mt-1 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-white/5 bg-neutral-900/60 px-3 py-1">
            {handle}
          </span>
          <span className="hidden rounded-full border border-white/5 bg-neutral-900/60 px-3 py-1 sm:inline">
            {location}
          </span>
        </div>
      </div>
    </header>
  );
}

