'use client';

import { Button } from '@nipsys/lsd';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection behavior
 */
export const CODE = `import { ArrowRightIcon } from '@phosphor-icons/react';
import { Button } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button asChild>
        <a href="/docs">Link Button</a>
      </Button>
      <Button variant="outlined" asChild>
        <a href="/docs">
          Learn More
          <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
        </a>
      </Button>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button asChild>
        <a href="/docs">Link Button</a>
      </Button>
      <Button variant="outlined" asChild>
        <a href="/docs">
          Learn More
          <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
        </a>
      </Button>
    </div>
  );
}

export default function ButtonAsChildPage() {
  return <Example />;
}
