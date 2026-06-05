import { Skeleton } from '@/components/ui/skeleton';

export default function IntroVideoSkeleton() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <Skeleton className="aspect-video w-full rounded-xl" />
    </div>
  );
}
