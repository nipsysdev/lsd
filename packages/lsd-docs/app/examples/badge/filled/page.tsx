'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="filled">New Feature</Badge>
      <Badge variant="filled">Popular</Badge>
      <Badge variant="filled">Recommended</Badge>
    </div>
  );
}`;

export function BadgeFilledExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="filled">New Feature</Badge>
      <Badge variant="filled">Popular</Badge>
      <Badge variant="filled">Recommended</Badge>
    </div>
  );
}

export default function Filled() {
  return <BadgeFilledExample />;
}
