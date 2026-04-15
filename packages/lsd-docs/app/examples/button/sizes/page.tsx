'use client';

import { Button } from '@nipsys/lsd';
import { PlusIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button } from '@nipsys/lsd';
import { PlusIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
        <Button variant="filled-rounded" size="square-sm">
          <PlusIcon />
        </Button>
        <Button variant="filled-rounded" size="square-md">
          <PlusIcon />
        </Button>
        <Button variant="filled-rounded" size="square-lg">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}`;

export function ButtonSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
        <Button variant="filled-rounded" size="square-sm">
          <PlusIcon />
        </Button>
        <Button variant="filled-rounded" size="square-md">
          <PlusIcon />
        </Button>
        <Button variant="filled-rounded" size="square-lg">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}

export default function Sizes() {
  return <ButtonSizesExample />;
}
