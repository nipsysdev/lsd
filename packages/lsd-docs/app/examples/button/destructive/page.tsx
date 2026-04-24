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
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive">Remove</Button>
    </div>
  );
}`;

export function ButtonDestructiveExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive">Remove</Button>
    </div>
  );
}

export default function Destructive() {
  return <ButtonDestructiveExample />;
}
