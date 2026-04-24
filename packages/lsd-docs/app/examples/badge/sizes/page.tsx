'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';

export const SIZE = 'sm';

/** @docSection size */
export const CODE = `import { Badge } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}
`;

export function BadgeSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap items-center gap-(--lsd-spacing-base) h-fit">
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
