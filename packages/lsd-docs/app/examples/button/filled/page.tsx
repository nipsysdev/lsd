'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="filled">Save Changes</Button>
      <Button variant="filled">Continue</Button>
      <Button variant="filled">Submit</Button>
    </div>
  );
}`;

export function ButtonFilledExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="filled">Save Changes</Button>
      <Button variant="filled">Continue</Button>
      <Button variant="filled">Submit</Button>
    </div>
  );
}

export default function Filled() {
  return <ButtonFilledExample />;
}
