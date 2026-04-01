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
          "group relative overflow-hidden flex items-center gap-3 rounded-xl border border-dashed px-4 py-3 text-sm sm:px-5 sm:py-4",
          "bg-neutral-950/60 transition-all duration-300 ease-out",
          "hover:bg-accent hover:text-accent-foreground",
          "hover:border-accent/40"
        )}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04 * index, duration: 0.28, ease: 'easeOut' }}
      >

        <div className="flex size-9 items-center justify-center  rounded-lg border border-white/5 bg-neutral-900/80 text-secondary shadow-sm group-hover:border-dashed">
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
            <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
              <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
              {link.featuredWord}
            </div>
          )}
<span className="text-xs text-muted-foreground transition-transform duration-300 transform group-hover:rotate-45">
  ↗
</span>
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10 opacity-0 blur-lg transition-opacity duration-300 " />
      </MotionA>
    );
  },
);

LinkCard.displayName = 'LinkCard';

