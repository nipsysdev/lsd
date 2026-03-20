'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { PlusIcon } from '@phosphor-icons/react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';
import { PlusIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
