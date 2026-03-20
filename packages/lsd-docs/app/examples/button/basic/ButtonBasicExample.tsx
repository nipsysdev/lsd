'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';
import { CheckIcon, DownloadIcon, PlusIcon, ShareIcon, TrashIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="link">Link</Button>
      <Button variant="filled-rounded" size="square-md">
        <PlusIcon />
      </Button>
      <Button variant="outlined-rounded" size="square-md">
        <ShareIcon weight="duotone" />
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-rounded" size="square-md">
        <DownloadIcon weight="duotone" />
      </Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive-rounded" size="square-md">
        <TrashIcon weight="duotone" />
      </Button>
      <Button variant="success">Save</Button>
      <Button variant="success-rounded" size="square-md">
        <CheckIcon />
      </Button>
    </div>
  );
}`;

export function ButtonBasicExample() {
  useInIframeThemeSync();
  const { PlusIcon, ShareIcon, DownloadIcon, TrashIcon, CheckIcon } =
    require('@phosphor-icons/react');

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="link">Link</Button>
      <Button variant="filled-rounded" size="square-md">
        <PlusIcon />
      </Button>
      <Button variant="outlined-rounded" size="square-md">
        <ShareIcon weight="duotone" />
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-rounded" size="square-md">
        <DownloadIcon weight="duotone" />
      </Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive-rounded" size="square-md">
        <TrashIcon weight="duotone" />
      </Button>
      <Button variant="success">Save</Button>
      <Button variant="success-rounded" size="square-md">
        <CheckIcon />
      </Button>
    </div>
  );
}
