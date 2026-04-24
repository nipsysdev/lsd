'use client';

import { Button } from '@nipsys/lsd';
import { DownloadIcon, PlusIcon, ShareIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'
import { PlusIcon, ShareIcon, DownloadIcon } from '@phosphor-icons/react'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="outlined-rounded">Add Item</Button>
      <Button variant="outlined-rounded" size="square-sm">
        <PlusIcon />
      </Button>
      <Button variant="outlined-rounded" size="square-sm">
        <ShareIcon weight="duotone" />
      </Button>
      <Button variant="outlined-rounded" size="square-sm">
        <DownloadIcon weight="duotone" />
      </Button>
    </div>
  );
}`;

export function ButtonOutlinedRoundedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="outlined-rounded">Add Item</Button>
      <Button variant="outlined-rounded" size="square-sm">
        <PlusIcon />
      </Button>
      <Button variant="outlined-rounded" size="square-sm">
        <ShareIcon weight="duotone" />
      </Button>
      <Button variant="outlined-rounded" size="square-sm">
        <DownloadIcon weight="duotone" />
      </Button>
    </div>
  );
}

export default function OutlinedRounded() {
  return <ButtonOutlinedRoundedExample />;
}
