'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { ArrowRightIcon, CheckIcon, DownloadIcon } from '@phosphor-icons/react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';
import { ArrowRightIcon, CheckIcon, DownloadIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button variant="outlined">
        <DownloadIcon className="mr-(--lsd-spacing-smaller)" weight="duotone" />
        Download
      </Button>
      <Button variant="success">
        <CheckIcon className="mr-(--lsd-spacing-smaller)" />
        Save Changes
      </Button>
      <Button variant="outlined">
        Learn More
        <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
      </Button>
    </div>
  );
}`;

export function ButtonIconsExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button variant="outlined">
        <DownloadIcon className="mr-(--lsd-spacing-smaller)" weight="duotone" />
        Download
      </Button>
      <Button variant="success">
        <CheckIcon className="mr-(--lsd-spacing-smaller)" />
        Save Changes
      </Button>
      <Button variant="outlined">
        Learn More
        <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
      </Button>
    </div>
  );
}
