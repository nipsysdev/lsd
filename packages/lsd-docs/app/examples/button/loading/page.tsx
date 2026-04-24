'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection feature
 */
export const CODE = `import { Button } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button loading>Loading</Button>
      <Button loading>With Text</Button>
    </div>
  );
}`;

export function ButtonLoadingExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button loading>Loading</Button>
      <Button loading>With Text</Button>
    </div>
  );
}

export default function Loading() {
  return <ButtonLoadingExample />;
}
