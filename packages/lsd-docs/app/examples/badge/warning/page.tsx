'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="warning">Warning</Badge>
      <Badge variant="warning">Attention Required</Badge>
    </div>
  );
}`;

export function BadgeWarningExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="warning">Warning</Badge>
      <Badge variant="warning">Attention Required</Badge>
    </div>
  );
}

export default function Warning() {
  return <BadgeWarningExample />;
}
