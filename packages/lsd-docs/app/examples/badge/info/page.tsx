'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="info">Info</Badge>
      <Badge variant="info">Note</Badge>
    </div>
  );
}`;

export function BadgeInfoExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="info">Info</Badge>
      <Badge variant="info">Note</Badge>
    </div>
  );
}

export default function Info() {
  return <BadgeInfoExample />;
}
