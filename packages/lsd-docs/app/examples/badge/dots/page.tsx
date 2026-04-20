'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) h-fit items-center">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}`;

export function BadgeDotsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) h-fit items-center">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}

export default function Dots() {
  return <BadgeDotsExample />;
}
