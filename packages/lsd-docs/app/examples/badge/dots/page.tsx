'use client';

import { Badge } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
      <Badge variant="dot" size="sm" dot className="lsd:bg-(--lsd-color-success)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-warning)" />
      <Badge variant="dot" size="lg" dot className="lsd:bg-(--lsd-color-info)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-destructive)" />
    </div>
  );
}`;

export function BadgeDotsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
      <Badge variant="dot" size="sm" dot className="lsd:bg-(--lsd-color-success)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-warning)" />
      <Badge variant="dot" size="lg" dot className="lsd:bg-(--lsd-color-info)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-destructive)" />
    </div>
  );
}

export default function Dots() {
  return <BadgeDotsExample />;
}
