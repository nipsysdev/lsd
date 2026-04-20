'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="destructive">Error</Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  );
}`;

export function BadgeDestructiveExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="destructive">Error</Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  );
}

export default function Destructive() {
  return <BadgeDestructiveExample />;
}
