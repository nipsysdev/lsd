'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="ghost">Edit</Button>
      <Button variant="ghost">Copy</Button>
      <Button variant="ghost">Share</Button>
    </div>
  );
}`;

export function ButtonGhostExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="ghost">Edit</Button>
      <Button variant="ghost">Copy</Button>
      <Button variant="ghost">Share</Button>
    </div>
  );
}

export default function Ghost() {
  return <ButtonGhostExample />;
}
