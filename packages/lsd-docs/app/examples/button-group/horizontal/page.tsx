'use client';

import { Button, ButtonGroup } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, ButtonGroup } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup orientation="horizontal">
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
    <ButtonGroup orientation="horizontal">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}

export default function HorizontalPage() {
  return <Example />;
}
