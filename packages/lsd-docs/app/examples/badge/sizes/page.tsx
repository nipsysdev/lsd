'use client';

import { Badge } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap items-center gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}`;

export function BadgeSizesExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-wrap items-center gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}

export default function Sizes() {
  return <BadgeSizesExample />;
}
