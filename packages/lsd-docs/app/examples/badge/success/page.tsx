'use client';

import { Badge } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Badge } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="success">Success</Badge>
      <Badge variant="success">Completed</Badge>
    </div>
  );
}`;

export function BadgeSuccessExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="success">Success</Badge>
      <Badge variant="success">Completed</Badge>
    </div>
  );
}

export default function Success() {
  return <BadgeSuccessExample />;
}
