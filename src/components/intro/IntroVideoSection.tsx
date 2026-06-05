'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import IntroVideoSkeleton from './IntroVideoSkeleton';

const IntroVideoPlayer = dynamic(() => import('./IntroVideoPlayer'), {
  ssr: false,
});

export default function IntroVideoSection() {
  return (
    <Suspense fallback={<IntroVideoSkeleton />}>
      <IntroVideoPlayer />
    </Suspense>
  );
}
