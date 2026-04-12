'use client';

import { Button, ButtonGroup } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, ButtonGroup } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup>
      <Button variant="filled">Primary</Button>
      <Button variant="outlined">Secondary</Button>
    </ButtonGroup>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <ButtonGroup>
      <Button variant="filled">Primary</Button>
      <Button variant="outlined">Secondary</Button>
    </ButtonGroup>
  );
}

export default function VariantsPage() {
  return <Example />;
}
