'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection state
 */
export const CODE = `import { Button } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Disabled</Button>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </div>
  );
}

export default function ButtonDisabledPage() {
  return <Example />;
}
