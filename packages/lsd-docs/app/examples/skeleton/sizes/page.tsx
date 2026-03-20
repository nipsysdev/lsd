'use client';

import { Skeleton, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Custom Sizes</Typography>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-2 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}`;

export function SkeletonSizesExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Custom Sizes</Typography>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-2 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

export default function Sizes() {
  return <SkeletonSizesExample />;
}
