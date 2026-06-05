'use client';

import PlayCircle from '@/components/svgs/PlayCircle';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

const VIDEO_SRC = '/assets/intro.mp4';
const POSTER_SRC = '/assets/intro-poster.jpg';

export default function IntroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video || isLoading) return;

    setIsLoading(true);

    if (!hasLoaded) {
      video.src = VIDEO_SRC;
      setHasLoaded(true);
    }

    try {
      await video.play();
      setShowOverlay(false);
    } catch {
      setShowOverlay(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        'relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl',
        'border border-gray-100 bg-card shadow-sm dark:border-gray-800',
      )}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        preload="none"
        poster={POSTER_SRC}
        controls={!showOverlay}
        playsInline
      />

      {showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            type="button"
            aria-label="Play intro video"
            disabled={isLoading}
            onClick={handlePlayClick}
            className={cn(
              'flex size-16 items-center justify-center rounded-full',
              'bg-white/20 backdrop-blur-sm transition-colors duration-200',
              'hover:cursor-pointer hover:bg-white/30',
              'disabled:cursor-wait disabled:opacity-70',
            )}
          >
            {isLoading ? (
              <div className="size-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <PlayCircle />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
