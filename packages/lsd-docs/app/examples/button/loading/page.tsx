'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';

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
