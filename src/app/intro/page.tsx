import Container from '@/components/common/Container';
import IntroVideoSection from '@/components/intro/IntroVideoSection';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Sparkles, Video } from 'lucide-react';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import React from 'react';

export const metadata: Metadata = {
  title: 'Intro Video - Coming Soon',
  description:
    'A video introduction showcase is currently in production. Stay tuned to learn more about my background, work, and engineering philosophy.',
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
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Coming Soon</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Intro Video
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I am currently recording and editing a video introduction to share my background, core values, and what I build. Stay tuned!
          </p>
        </div>

        <Separator />

        {/* Coming Soon Graphic Placeholder */}
        <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-background to-muted/40 p-8 shadow-xl flex flex-col items-center justify-center space-y-4">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-inner">
            <Video className="h-10 w-10 text-primary" />
            <div className="absolute -right-1 -top-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-primary"></span>
            </div>
          </div>
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-semibold">Video Showcase Under Production</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Check back soon to watch an introduction and walkthrough of my work and background.
            </p>
          </div>
        </div>

        {/* 
          Intro video section commented out for now as requested
          <IntroVideoSection /> 
        */}

        {/* Call to Actions */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
