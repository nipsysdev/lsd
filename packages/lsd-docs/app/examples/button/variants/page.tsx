'use client';

import { Button } from '@nipsys/lsd';
import { CheckIcon, DownloadIcon, PlusIcon, ShareIcon, TrashIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button } from '@nipsys/lsd';
import { CheckIcon, DownloadIcon, ShareIcon, TrashIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="filled-rounded" size="square-md">
          <PlusIcon />
        </Button>
        <Button variant="outlined-rounded" size="square-md">
          <ShareIcon weight="duotone" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost-rounded" size="square-md">
          <DownloadIcon weight="duotone" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="destructive">Delete</Button>
        <Button variant="destructive-rounded" size="square-md">
          <TrashIcon weight="duotone" />
        </Button>
        <Button variant="success">Save</Button>
        <Button variant="success-rounded" size="square-md">
          <CheckIcon />
        </Button>
      </div>
    </div>
  );
}`;

export function ButtonVariantsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="filled-rounded" size="square-md">
          <PlusIcon />
        </Button>
        <Button variant="outlined-rounded" size="square-md">
          <ShareIcon weight="duotone" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost-rounded" size="square-md">
          <DownloadIcon weight="duotone" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="destructive">Delete</Button>
        <Button variant="destructive-rounded" size="square-md">
          <TrashIcon weight="duotone" />
        </Button>
        <Button variant="success">Save</Button>
        <Button variant="success-rounded" size="square-md">
          <CheckIcon />
        </Button>
      </div>
    </div>
  );
}

export default function Variants() {
  return <ButtonVariantsExample />;
}
