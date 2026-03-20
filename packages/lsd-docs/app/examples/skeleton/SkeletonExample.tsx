'use client';

import { Skeleton, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Card Skeleton</Typography>
      <div className="space-y-(--lsd-spacing-base)">
        <Skeleton className="h-(--lsd-spacing-5x) w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <Typography variant="label1">Avatar Skeleton</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Skeleton className="size-(--lsd-spacing-5x) rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      <Typography variant="label1">List Skeleton</Typography>
      <div className="space-y-(--lsd-spacing-base)">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-(--lsd-spacing-base)">
            <Skeleton className="size-(--lsd-spacing-2x) rounded-full" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>

      <Typography variant="label1">Custom Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Skeleton className="h-(--lsd-spacing-smaller) w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-(--lsd-spacing-base) w-full" />
        <Skeleton className="h-(--lsd-spacing-larger) w-full" />
      </div>
    </div>
  );
}`;

export function SkeletonExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Card Skeleton</Typography>
      <div className="space-y-(--lsd-spacing-base)">
        <Skeleton className="h-(--lsd-spacing-5x) w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <Typography variant="label1">Avatar Skeleton</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Skeleton className="size-(--lsd-spacing-5x) rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      <Typography variant="label1">List Skeleton</Typography>
      <div className="space-y-(--lsd-spacing-base)">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-(--lsd-spacing-base)">
            <Skeleton className="size-(--lsd-spacing-2x) rounded-full" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>

      <Typography variant="label1">Custom Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Skeleton className="h-(--lsd-spacing-smaller) w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-(--lsd-spacing-base) w-full" />
        <Skeleton className="h-(--lsd-spacing-larger) w-full" />
      </div>
    </div>
  );
}
