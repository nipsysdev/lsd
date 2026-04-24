'use client';

import { Button } from '@nipsys/lsd';
import { CheckIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'
import { CheckIcon } from '@phosphor-icons/react'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="success-rounded">Confirm</Button>
      <Button variant="success-rounded">Complete</Button>
      <Button variant="success-rounded" size="square-sm">
        <CheckIcon />
      </Button>
    </div>
  );
}`;

export function ButtonSuccessRoundedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="success-rounded">Confirm</Button>
      <Button variant="success-rounded">Complete</Button>
      <Button variant="success-rounded" size="square-sm">
        <CheckIcon />
      </Button>
    </div>
  );
}

export default function SuccessRounded() {
  return <ButtonSuccessRoundedExample />;
}
