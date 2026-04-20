'use client';

import { Button } from '@nipsys/lsd';
import { DownloadIcon, ShareIcon, UploadIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'
import { ShareIcon, DownloadIcon, UploadIcon } from '@phosphor-icons/react'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="ghost-rounded">Share</Button>
      <Button variant="ghost-rounded" size="square-sm">
        <ShareIcon weight="duotone" />
      </Button>
      <Button variant="ghost-rounded" size="square-sm">
        <DownloadIcon weight="duotone" />
      </Button>
      <Button variant="ghost-rounded" size="square-sm">
        <UploadIcon weight="duotone" />
      </Button>
    </div>
  );
}`;

export function ButtonGhostRoundedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="ghost-rounded">Share</Button>
      <Button variant="ghost-rounded" size="square-sm">
        <ShareIcon weight="duotone" />
      </Button>
      <Button variant="ghost-rounded" size="square-sm">
        <DownloadIcon weight="duotone" />
      </Button>
      <Button variant="ghost-rounded" size="square-sm">
        <UploadIcon weight="duotone" />
      </Button>
    </div>
  );
}

export default function GhostRounded() {
  return <ButtonGhostRoundedExample />;
}
