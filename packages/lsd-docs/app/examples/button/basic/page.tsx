'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection usage
 */
export const CODE = `import { Button } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button>Default Button</Button>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </div>
  );
}`;

export function ButtonBasicExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button>Default Button</Button>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </div>
  );
}

export default function Basic() {
  return <ButtonBasicExample />;
}
