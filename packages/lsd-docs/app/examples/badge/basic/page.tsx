'use client';

import { Badge } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge>New</Badge>
      <Badge>In Progress</Badge>
      <Badge>Completed</Badge>
      <Badge>Archived</Badge>
    </div>
  );
}`;

export function BadgeBasicExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge>New</Badge>
      <Badge>In Progress</Badge>
      <Badge>Completed</Badge>
      <Badge>Archived</Badge>
    </div>
  );
}

export default function Basic() {
  return <BadgeBasicExample />;
}
