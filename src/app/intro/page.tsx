import Container from '@/components/common/Container';
import IntroVideoSection from '@/components/intro/IntroVideoSection';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import React from 'react';

export const metadata: Metadata = {
  title: 'Intro Video',
  description:
    // TODO: replace placeholder copy
    'Watch a short introduction to learn more about my background, work, and what I build.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function IntroPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {/* TODO: replace placeholder copy */}
            Intro Video
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {/* TODO: replace placeholder copy */}
            A quick overview of who I am, what I do, and the kind of work I
            enjoy building.
          </p>
        </div>

        <Separator />

        <IntroVideoSection />

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact">
              {/* TODO: replace placeholder copy */}
              Get in Touch
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">
              {/* TODO: replace placeholder copy */}
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
