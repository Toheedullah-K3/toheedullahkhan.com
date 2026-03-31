import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { LinkItem } from '@/config/Links';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  link: LinkItem;
  index?: number;
}

export const LinkCard = forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ link, index = 0 }, ref) => {
    const MotionA = motion.a;

    return (
      <MotionA
        ref={ref}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative flex items-center gap-3 rounded-xl border border-white/5 bg-neutral-950/60 px-4 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:px-5 sm:py-4',
          'hover:border-indigo-500/40 hover:bg-neutral-900/80',
        )}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04 * index, duration: 0.28, ease: 'easeOut' }}
      >
        <div className="flex size-9 items-center justify-center rounded-lg border border-white/5 bg-neutral-900/80 text-indigo-300 shadow-sm group-hover:border-indigo-500/40 group-hover:bg-neutral-900 group-hover:text-indigo-200">
          {link.icon}
        </div>
        <div className="flex min-w-0 flex-1 flex-col text-left">
          <span className="truncate text-[0.93rem] font-medium">
            {link.title}
          </span>
          {link.description && (
            <span className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
              {link.description}
            </span>
          )}
        </div>
        <div className="ml-2 flex items-center gap-2">
          {link.featured && (
            <span className="hidden rounded-full bg-indigo-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-indigo-300 sm:inline-flex">
              Featured
            </span>
          )}
          <span className="text-xs text-muted-foreground transition group-hover:text-indigo-300">
            ↗
          </span>
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
      </MotionA>
    );
  },
);

LinkCard.displayName = 'LinkCard';

