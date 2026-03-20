'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button loading>Loading</Button>
      <Button loading>With Text</Button>
    </div>
  );
}`;

export function ButtonLoadingExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button loading>Loading</Button>
      <Button loading>With Text</Button>
    </div>
  );
}

export default function Loading() {
  return <ButtonLoadingExample />;
}
