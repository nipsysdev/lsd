/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { Skeleton, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Card Skeleton</Typography>
      <div className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}`;

export function SkeletonCardExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Card Skeleton</Typography>
      <div className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export default function Card() {
  return <SkeletonCardExample />;
}
