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
      <Button variant="success">Confirm</Button>
      <Button variant="success">Approve</Button>
    </div>
  );
}`;

export function ButtonSuccessExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="success">Confirm</Button>
      <Button variant="success">Approve</Button>
    </div>
  );
}

export default function Success() {
  return <ButtonSuccessExample />;
}
