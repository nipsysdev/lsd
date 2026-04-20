'use client';

import { Button } from '@nipsys/lsd';
import { TrashIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'
import { TrashIcon } from '@phosphor-icons/react'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="destructive-rounded">Delete</Button>
      <Button variant="destructive-rounded">Remove</Button>
      <Button variant="destructive-rounded" size="square-sm">
        <TrashIcon weight="duotone" />
      </Button>
    </div>
  );
}`;

export function ButtonDestructiveRoundedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="destructive-rounded">Delete</Button>
      <Button variant="destructive-rounded">Remove</Button>
      <Button variant="destructive-rounded" size="square-sm">
        <TrashIcon weight="duotone" />
      </Button>
    </div>
  );
}

export default function DestructiveRounded() {
  return <ButtonDestructiveRoundedExample />;
}
