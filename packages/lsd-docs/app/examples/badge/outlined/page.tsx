'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="outlined">Beta</Badge>
      <Badge variant="outlined">In Progress</Badge>
      <Badge variant="outlined">Draft</Badge>
    </div>
  );
}`;

export function BadgeOutlinedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="outlined">Beta</Badge>
      <Badge variant="outlined">In Progress</Badge>
      <Badge variant="outlined">Draft</Badge>
    </div>
  );
}

export default function Outlined() {
  return <BadgeOutlinedExample />;
}
