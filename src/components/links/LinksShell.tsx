'use client';

import { motion } from 'framer-motion';
import { ProfileHeader } from '@/components/links/ProfileHeader';
import { LinkCard } from '@/components/links/LinkCard';
import { SocialLinks } from '@/components/links/SocialLinks';
import { primaryLinks, secondaryLinks } from '@/config/Links';

export function LinksShell() {
  return (
    <motion.section
      className="mx-auto flex w-full max-w-xl flex-col gap-8 rounded-3xl border px-5 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-2xl sm:px-8 sm:py-8"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <ProfileHeader />

      <section aria-label="Primary links" className="space-y-3">
        {primaryLinks.map((link, index) => (
          <LinkCard key={link.id} link={link} index={index} />
        ))}
      </section>

      {secondaryLinks.length > 0 && (
        <section
          aria-label="More links"
          className="space-y-3 border-t border-white/5 pt-4"
        >
          {secondaryLinks.map((link, index) => (
            <LinkCard
              key={link.id}
              link={link}
              index={primaryLinks.length + index}
            />
          ))}
        </section>
      )}

      <footer className="mt-2 flex flex-col items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
        <SocialLinks />
        <p className="text-[0.7rem] text-muted-foreground/80">
          Built with Next.js, Tailwind CSS, and a focus on performant frontend
          experiences.
        </p>
      </footer>
    </motion.section>
  );
}