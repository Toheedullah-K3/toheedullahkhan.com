import { socialLinks } from '@/config/Links';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground',
        className,
      )}
    >
      {socialLinks.map((item) => (
        <Tooltip key={item.id} delayDuration={0}>
          <TooltipTrigger asChild>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/5 bg-neutral-950/60 px-3 py-1.5 transition hover:border-indigo-500/50 hover:bg-neutral-900 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <span className="text-indigo-300">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            {item.label}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

