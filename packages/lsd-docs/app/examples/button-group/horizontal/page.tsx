'use client';

import { Button, ButtonGroup } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection usage
 */
export const CODE = `import { Button, ButtonGroup } from '@nipsys/lsd';

export function Example() {
  return (
    <ButtonGroup orientation="horizontal" groupLabel="Navigation buttons">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <ButtonGroup orientation="horizontal" groupLabel="Navigation buttons">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}

export default function HorizontalPage() {
  return <Example />;
}
