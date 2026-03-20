'use client';

import { Skeleton } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Skeleton } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}`;

export function SkeletonExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

export default function SkeletonPage() {
  return <SkeletonExample />;
}
